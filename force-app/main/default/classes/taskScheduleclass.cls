global class taskScheduleclass implements Schedulable {
	
    global void execute(SchedulableContext ctx) {
        List<Opportunity> opptys = [SELECT Id, Name, OwnerId, CloseDate
            FROM Opportunity
            ];
        // Create a task for each opportunity in the list
        List<Opportunity> opp =new List<Opportunity>();
        for(Opportunity o:opptys){
            o.name='text schedule oppp';
            opp.add(o);
        }
        system.debug('opp'+opp);
        update opp;
    }
    
   
    

}