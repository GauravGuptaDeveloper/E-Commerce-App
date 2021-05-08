import { Subject } from "rxjs";
import { Cart } from "../models/cart";

export class CartMockService{

    cartItems: Cart[];
  
    cartItemsNotifier: Subject<Cart[]>;
  
    constructor() { 
      this.cartItems = [];
      this.cartItemsNotifier = new Subject();
      this.cartItems.push({
        "classification":"Test",
        "description":"Test",
        "filename":"Test",
        "id":"1",
        "price":200,
        "quantity":1,
        "title":"A Test",
        "type":"Mobile"
      }, {
        "classification":"Test B",
        "description":"Test B",
        "filename":"Test B",
        "id":"2",
        "price":400,
        "quantity":2,
        "title":"B Test",
        "type":"Laptop"
      })
    }
  
    updateSubscriber(){
      this.cartItemsNotifier.next(this.cartItems);
    }
  
    addItemToCart(cartItem: Cart){
      cartItem.quantity = 1;
      if(this.cartItems.length>0 && this.cartItems.some(cart=>cart.id===cartItem.id)){
        return;
      }else{
        this.cartItems.push(cartItem);
        this.updateSubscriber();
      }
    }
  
    getCartItems(){
      return this.cartItems;
    }
  
    removeItemFromCart(cartItem: Cart){
      this.cartItems = this.cartItems.filter((item)=>{
        return cartItem.id!=item.id;
      });
      this.updateSubscriber();
    }
  
    getCartSize(){
      return this.cartItems.length;
    }
  
    getTotalCost(){
      let sum = 0;
      this.cartItems.forEach((item)=>{
        sum+= (item.price? item.price : 0.0)*(item.quantity? item.quantity : 1);
      })
      return sum;
    }
  
    
    updateCartItem(updateItem: Cart){
      let index = this.cartItems.findIndex((item => item.id==updateItem.id));
      this.cartItems[index] = updateItem;
      this.updateSubscriber();
    }
  
    removeAllItems(){
      this.cartItems = [];
      this.updateSubscriber();
    }
  }
  