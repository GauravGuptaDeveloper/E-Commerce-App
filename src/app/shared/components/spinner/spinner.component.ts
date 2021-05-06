import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() isSpinning: boolean = false;
  @Input() height: string = "fit-content";

  constructor() { }

  ngOnInit(): void {
  }

  getStyle(){
    return {
      "height": this.height
    }
  }

}
