import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {};

  fileNamePath: string = "";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.product.filename?.includes('assets/images')){

    }else{
      this.fileNamePath = `assets/images/${this.product.classification}/${this.product.filename}`
      this.product.filename = this.fileNamePath;
    }
  }

  redirectToProductDetail(){
    // relativeTo can be added so that it appends to previous route because right now router dont know in  which component it is
    this.router.navigate([`product-detail/${this.product.classification}/${this.product.type}/${this.product.id}`])
  }

}
