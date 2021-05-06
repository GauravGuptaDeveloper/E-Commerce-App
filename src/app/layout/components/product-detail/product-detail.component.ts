import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/core/models/cart';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {};

  fileNamePath: string = "";

  id: string = "";
  classification = "";
  type: string = "";

  constructor(private productService: ProductService, private cartService: CartService, 
    private router: Router, private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        this.classification = params['classification'];
        this.type = params['type']
        this.id = params['id'];
      });
  }
  
  ngOnInit(): void {
    this.productService.getProduct(this.classification, this.type, this.id)?.then((res)=>{
      this.product = res;
      this.fileNamePath = `assets/images/${this.product.classification}/${this.product.filename}`;
      this.product.filename = this.fileNamePath;
    }, (err)=>{
  
    });
  }

  addToCart(){
    let cart: Cart = {...this.product};
    this.cartService.addItemToCart(cart);
  }

}
