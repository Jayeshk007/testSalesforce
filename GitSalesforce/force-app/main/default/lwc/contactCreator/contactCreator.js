import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import Contact_OBJECT from '@salesforce/schema/Contact';
import FirstName_FIELD from '@salesforce/schema/Contact.FirstName';
import LastName_FIELD from '@salesforce/schema/Contact.LastName';
import Email_FIELD from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {

    objectApiName = Contact_OBJECT;
    fields = [FirstName_FIELD, LastName_FIELD, Email_FIELD];

    handleSuccess(event){
        const toastEvent=new ShowToastEvent({
            title:'Contact is Created!',
            message:"RecordId:"+event.detail.id,
            variant:"Success"

        });
        this.dispatchEvent(toastEvent);
    }

}