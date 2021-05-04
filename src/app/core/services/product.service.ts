import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { MockBackendProduct } from './mockbackendproduct.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private mockBackendProduct: MockBackendProduct) {
  }

  getProducts(classification: string, type: string): Observable<Product[]>{
      return this.mockBackendProduct.getProducts(classification, type);      
  }

  getProductsOfThisType(classification: string, type: string): Promise<Product[]>{
    return this.mockBackendProduct.getProductsOfThisType(classification, type);      
  }

  getProduct(classification: string, type: string, id: string): Promise<Product>{
      return this.mockBackendProduct.getProduct(classification, type, id);      
  }

}
