import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { Product } from '../core/models/product';
import { ProductService } from '../core/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product[]> {

  defaultClassification: string = "food";

  constructor(private productService: ProductService){
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    if(route.params['classification']!=undefined && route.queryParams['type']!=undefined){
      return from(this.productService.getProductsOfThisType(route.params['classification'], route.queryParams['type']))
    }
    else if(route.queryParams['search']!=undefined){
      // return this.productService.getSearchProducts(route.queryParams['search'])
      return from(this.productService.getSearchProducts(route.queryParams['search']));
    }
    else if(route.params['classification']!=undefined && route.params['type']==undefined){
      return this.productService.getProducts(route.params['classification'], "")
    }
    else{
      return this.productService.getProducts(this.defaultClassification, "");
    }
  }
}
