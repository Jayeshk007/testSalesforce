import ContactMobile from '@salesforce/schema/Case.ContactMobile';
import { LightningElement } from 'lwc';

export default class Todo extends LightningElement {
    todoList=[];
    ide=0;
    handleAction(){
        this.ide=this.ide+1;
        this.todoList=[...this.todoList,{name:'todo'+this.ide,id:this.ide}];

    }

    deleteTodo(event){
        console.log('event',event.currentTarget.dataset.id);
        console.log('new id',JSON.stringify(event.currentTarget.dataset.id));
        var nId=event.currentTarget.dataset.id;
        nId=parseInt(nId,10);
        console.log('value',this.todoList[nId-1]);
        
        this.todoList=this.todoList.filter((item) => item.id !=nId );
        console.log(this.todoList);
        /*for( var i = 1; i < this.todoList.length; i++){ 
                                   
            if ( this.todoList[i].id == nId) { 
                this.todoList= this.todoList.splice(i, 1); 
                console.log(this.todoList);
                this.i--; 
            }
        }*/
    }

}