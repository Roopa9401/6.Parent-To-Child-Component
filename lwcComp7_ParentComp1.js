import { LightningElement } from 'lwc';

export default class LwcComp7_ParentComp1 extends LightningElement {
    
    isClicked=false;
    warning='';
    handleClick(event){
        this.warning='The End is Coming!!'
        this.isClicked=!this.isClicked;
    }

}