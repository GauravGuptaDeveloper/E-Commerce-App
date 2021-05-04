import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MockBackendProduct {

  private PRODUCT_API_URL: string;

  constructor(private productReadOnlyHttp: HttpClient) { 
    this.PRODUCT_API_URL = `/assets/templates/`;
  }

  getProducts(classification: string, type: string){
    return this.productReadOnlyHttp.get<Product[]>(this.PRODUCT_API_URL+classification+".json");
  }

  getProduct(classification: string, type: string, id: string): Promise<Product>{
    let product: Product = {};
    return new Promise((resolve, error)=>{
      this.productReadOnlyHttp.get<Product[]>(this.PRODUCT_API_URL+classification+".json").subscribe((foodItem)=>{
        foodItem.forEach(item => {
          console.log("ITEM", item, classification);
          
          if(item.id==id){
            product = item;
          }
        });
        resolve(product);
      }, (err)=>{
        console.log("Error in Food Service at line 28", err);
        error(err);
      });
    })
  }

  getProductsOfThisType(classification: string, type: string): Promise<Product[]>{
    let products: Product[] = [];
    return new Promise((resolve, error)=>{
      this.productReadOnlyHttp.get<Product[]>(this.PRODUCT_API_URL+classification+".json").subscribe((foodItem)=>{
        foodItem.forEach(item => {
          if(item.type==type){
            products.push(item);
          }
        });
        console.log("Product", products);
        resolve(products);
      }, (err)=>{
        console.log("Error in Food Service at line 58", err);
        error(err);
      });
    })
  }

}
