import { LightningElement,wire,api } from 'lwc';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';
import Account_Name from '@salesforce/schema/Account.Name' 

const cols=[

    {label:'Account Name',fieldName:Account_Name.fieldApiName,type:'text'}
];

export default class AccountFinder extends LightningElement {
    columns=cols;
    annualRevenue =null;
    handleChange(event){
        this.annualRevenue=event.detail.value;
    }

    reset(){
        this.annualRevenue=null;
    }
    
    @wire(queryAccountsByRevenue,{annualRevenue:'$annualRevenue'})
    accounts;

}