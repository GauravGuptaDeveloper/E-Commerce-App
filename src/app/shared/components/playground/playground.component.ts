import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  data;

  constructor() { 
    this.data = "Gaurav";
  }

  ngOnInit(): void {
  }

  changeConditionForNgIf(){
    if(this.data==""){
      this.data = "gaurav";
    }else{
      this.data = "";
    }
  }

  conditionForStringEmpty(){
    return this.data!=""?true:false
  }

}
