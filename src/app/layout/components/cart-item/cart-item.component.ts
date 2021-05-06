import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cart } from 'src/app/core/models/cart';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cart: Cart;

  cartItemOptionCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  selectedOption;

  price;

  constructor(private cartService: CartService) {
    this.cart = {};
    this.selectedOption = this.cartItemOptionCount[0];
    this.price = 0.0;
  }

  ngOnInit(): void {
    this.selectedOption = this.cart.quantity? this.cart.quantity : 1;
    this.price = (this.cart.price? this.cart.price: 0.0) * this.selectedOption;
  }

  updateCartItem(selectedOption: number){
    let updatedItem = {...this.cart, quantity: selectedOption}    
    this.cartService.updateCartItem(updatedItem);
  }
  
  deleteTheItemFromCart(){
    this.cartService.removeItemFromCart(this.cart);
  }
}
