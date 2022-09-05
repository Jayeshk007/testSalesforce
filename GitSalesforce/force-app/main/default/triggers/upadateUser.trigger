trigger upadateUser on User (after update) {
    system.debug('call1');
    map<Account,integer> newMap= new map<Account,integer>();
	List<Messaging.SingleEmailMessage> mails = new List<Messaging.SingleEmailMessage>();
    for(user u:trigger.new){
        list<account> acclist=[select name,(select name from contacts) from account where ownerId=:u.Id];
        for(account a:accList){
            newMap.put(a,a.contacts.size());
        }
        system.debug('newMap'+newMap);
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        user manager=[select id,Email from user where id=:u.ManagerId limit 1];
        
        system.debug(manager);
        List<String> sendTo = new List<String>();
        sendTo.add(manager.Email);
        mail.setToAddresses(sendTo);
        mail.setTargetObjectId(u.ManagerId);
        mail.setSubject('Subject Content');
     	String body = ' Dear User'+','+'You have assigned number of account and Account Contains Number of Contacts.';
        for(Account a1:newMap.keySet()){
            body=body+'Account Name:' + a1.Name + '-->Contacts size: '+newMap.get(a1);
            system.debug('new body'+body+a1.Name+newMap.get(a1));
        }
       system.debug('body'+body);
        mail.setSaveAsActivity(false);
      	mail.setHtmlBody(body);
    
      //Add your email to the master list
      	mails.add(mail);
    

    }  
    
      Messaging.sendEmail(mails);

}