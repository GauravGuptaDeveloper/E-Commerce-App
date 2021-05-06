import { TestBed } from '@angular/core/testing';
import { Cart } from '../models/cart';

import { CartService } from './cart.service';
import { CartMockService } from './mock-testing-cart.service';

describe('CartService', () => {
  let service: CartService;

  const dummyPosts: Cart[] = [{
    classification:"Test",
    "description":"Test",
    "filename":"Test",
    "id":"1",
    "price":200,
    "quantity":1,
    "title":"A Test",
    "type":"Mobile"
  }, {
    classification:"Test B",
    "description":"Test B",
    "filename":"Test B",
    "id":"2",
    "price":400,
    "quantity":2,
    "title":"B Test",
    "type":"Laptop"
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: CartService,
        useClass: CartMockService
      }]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('cart should have size 2', () => {
    const cartSize = service.getCartSize();
    expect(cartSize).toBe(dummyPosts.length);
  });

  it('cart should get all items', () => {
    const carts: Cart[] = service.getCartItems();
    expect(carts).toEqual(dummyPosts);
  });

  it('cart should have total cost as dummpyposts', () => {
    const cost = service.getTotalCost();
    expect(cost).toBe(1000);
  });
});
