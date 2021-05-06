import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/models/cart';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Cart[];
  cartSize: any ;  

  constructor(private cartService: CartService, private router: Router, private _cdr: ChangeDetectorRef) {
    this.cartItems = [];
  }
  
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartService.cartItemsNotifier.subscribe((carts)=>{
      this.cartItems = carts;
      this.cartSize = carts.length;
      // For testing purpose
      // this._cdr.detectChanges();
    })
  }

  getLengthOfCart(){
    return this.cartService.getCartSize();
  }

  getTotalCost(){
    return this.cartService.getTotalCost();
  }

  redirectToPaymentPage(){
    console.log(this.cartService.getTotalCost());
    this.router.navigate(['check-out']);
  }
}
