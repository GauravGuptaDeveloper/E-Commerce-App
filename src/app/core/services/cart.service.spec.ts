import { TestBed } from '@angular/core/testing';
import { Cart } from '../models/cart';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  const dummyPosts: Cart[] = [{
      id: "g_01",
      title: "Test 1",
      classification: "Test 1_2",
      type: "Mobile",
      description: "Lorem lipsum",
      filename: "01.jpg",
      price: 12,
      quantity: 1
    }, 
    {
      id: "g_02",
      title: "Test 2",
      classification: "Test 2_2",
      type: "Mobile",
      description: "Lorem lipsum",
      filename: "02.jpg",
      price: 10,
      quantity: 1
    }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('cart should have size 2', () => {
    dummyPosts.forEach((cart)=>{
      service.addItemToCart(cart);
    })

    const cartSize = service.getCartSize();
    expect(cartSize).toBe(dummyPosts.length);
  });

  it('cart should get all items', () => {
    dummyPosts.forEach((cart)=>{
      service.addItemToCart(cart);
    })

    const carts: Cart[] = service.getCartItems();
    expect(carts).toEqual(dummyPosts);
  });

  it('cart should have total cost as dummpyposts', () => {
    dummyPosts.forEach((cart)=>{
      service.addItemToCart(cart);
    })

    const cost = service.getTotalCost();
    expect(cost).toBe(22);
  });
});
