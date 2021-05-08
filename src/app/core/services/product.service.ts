import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { MockBackendProduct } from './mockbackendproduct.service';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private mockBackendProduct: MockBackendProduct, private searchService: SearchService) {
  }

  getSearchProducts(search: string): Promise<Product[]>{
    return this.searchService.searchProduct(search);
  }

  // getSearchProducts(search: string): Observable<Product[]>{
  //   return this.searchService.searchProduct(search);
  // }

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
