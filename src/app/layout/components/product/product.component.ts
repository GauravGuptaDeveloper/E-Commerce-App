import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
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
    this.router.navigate([`product-detail/${this.product.classification}/${this.product.type}/${this.product.id}`])
  }

}
