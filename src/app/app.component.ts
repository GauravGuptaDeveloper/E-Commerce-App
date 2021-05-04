import { Component, OnInit } from '@angular/core';
import { Cart } from './core/models/cart';
import { Product } from './core/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-app';

  demoProductDeleteAtTheEnd: Product;
  demoCartProductDeleteAtTheEnd: Cart;
  
  constructor(){
    this.demoProductDeleteAtTheEnd = {
      "id": "f_01",
      "title": "Brown eggs",
      "type": "food",
      "description": "Raw organic brown eggs in a basket",
      "filename": "0.jpg",
      "price": 28.1
    }

    this.demoCartProductDeleteAtTheEnd = {
      "id": "f_01",
      "title": "Brown eggs",
      "type": "food",
      "description": "Raw organic brown eggs in a basket",
      "filename": "0.jpg",
      "price": 28.1,
      "quantity":4
    }
  }
  
  ngOnInit(): void {
    
  }


}
