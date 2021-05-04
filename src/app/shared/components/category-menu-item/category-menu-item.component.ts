import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-category-menu-item',
  templateUrl: './category-menu-item.component.html',
  styleUrls: ['./category-menu-item.component.css']
})
export class CategoryMenuItemComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() category: Category;

  // @ViewChild('classificationButton', { static: false }) classificationButton: ElementRef;

  constructor(private router: Router, private el: ElementRef) {
    this.category = {};
    // this.classificationButton = el;
  }
  ngOnDestroy(): void {
  }

  ngAfterViewInit() {
    // fromEvent(document.getElementsByTagName('button'), 'click').pipe(delay(1500)).subscribe((x)=>{
    //   console.log("Printed here");
    //   this.showCategoryTypesBar();
    // })
  }

  ngOnInit(): void {
    console.log("All type", this.category.type);
    
  }

  showTheseTypes(type: string){
    console.log("TYPES", type);
    
    this.router.navigate(['product', this.category.classification], {queryParams: {
      'type':type
    }})
  }

  showThisClassification(){
    this.router.navigate(['product', this.category.classification])
  }
}
