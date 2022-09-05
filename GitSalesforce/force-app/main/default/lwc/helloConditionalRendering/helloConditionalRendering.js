import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    areDetailsVisible = false;

    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
        this.testAsync();
    }
    async asyncDemo() {
        return 'This is asyncDemo';
           }
       
    testAsync() {
    this.asyncDemo()
                .then((result) => {
                    alert(result);
                });
        }
       
}