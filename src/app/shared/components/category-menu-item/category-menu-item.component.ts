import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-category-menu-item',
  templateUrl: './category-menu-item.component.html',
  styleUrls: ['./category-menu-item.component.scss']
})
export class CategoryMenuItemComponent implements OnInit {

  @Input() category: Category;

  constructor(private router: Router, private el: ElementRef) {
    this.category = {};
  }

  ngOnInit(): void {
  }

  showTheseTypes(type: string){
    this.router.navigate(['product', this.category.classification], {queryParams: {
      'type':type
    }})
  }

  showThisClassification(){
    this.router.navigate(['product', this.category.classification])
  }
}
