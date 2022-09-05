import { LightningElement,wire,api } from 'lwc';
import getContact from '@salesforce/apex/lwcTaskController.getContact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
const cl=[

    {
        label: 'First Name',
        fieldName: FIRSTNAME_FIELD.fieldApiName,
        type: 'text',
    },
    {
        label: 'Last Name',
        fieldName: LASTNAME_FIELD.fieldApiName,
        type: 'text',
        
    },
    
    
    {
        label: 'Email',
        fieldName: EMAIL_FIELD.fieldApiName,
        type: 'email',
        
    },

    {
        label: 'Phone',
        fieldName: PHONE_FIELD.fieldApiName,
        type: 'phone',
       
    },

];
export default class LwcTask extends LightningElement {
    columns=cl;
    @api recordId;
    @wire(getContact,{accId:'$recordId'})
    contacts;




}