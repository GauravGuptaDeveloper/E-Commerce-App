import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  typeObservable: Observable<any>;

  typeSubject: Subject<string>;

  private PRODUCT_API_URL: string;
  private ALL_PRODUCT_FILE: string;

  constructor(private productReadOnlyHttp: HttpClient) { 
    this.typeObservable = new Observable<any>();
    this.typeObservable = fromEvent(document.getElementsByTagName('input'), 'keyup');
    this.typeSubject = new Subject();

    this.PRODUCT_API_URL = `/assets/templates/`;
    this.ALL_PRODUCT_FILE = `products`;
  }

  searchProduct(search: string): Promise<Product[]>{
    let products: Product[] = [];
    search = search.toLowerCase();
    return new Promise((resolve, reject)=>{
      this.productReadOnlyHttp.get<Product[]>(this.PRODUCT_API_URL+this.ALL_PRODUCT_FILE+".json").subscribe((items)=>{
        items.forEach((item)=>{
          if(item.classification?.toLowerCase().includes(search)){
            products.push(item);
          }else if(item.title?.toLowerCase().includes(search)){
            products.push(item);
          }else if(item.type?.toLowerCase().includes(search)){
            products.push(item);
          }
        })
        resolve(products)
      })
    });
  }
}
