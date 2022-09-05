import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Lead_OBJECT from '@salesforce/schema/Lead';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import Email_FIELD from '@salesforce/schema/Lead.Email';
import Phone_FIELD from '@salesforce/schema/Lead.Phone';
import Status_FIELD from '@salesforce/schema/Lead.Status';
import Company_FIELD from '@salesforce/schema/Lead.Company';

export default class LeadForm extends LightningElement {

    objectApiName = Lead_OBJECT;
    fields = [NAME_FIELD, Company_FIELD, Email_FIELD, Phone_FIELD, Status_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Lead created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}