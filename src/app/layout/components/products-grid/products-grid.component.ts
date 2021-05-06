import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {

  products: Product[] = [];

  searchText: string;

  // default classification is food
  classification: string = "food";
  type: string = "";

  constructor(private productService: ProductService, private searchService: SearchService, private route: ActivatedRoute) {
    this.searchText = ""
  }
  
  ngOnInit(): void {
    // for search text.
    this.searchService.typeSubject.subscribe((value)=>{
      this.searchText = value;
    })

    this.route.data.subscribe((data)=>{
      this.classification = data.classification;
      this.getProductsFromService();
    })
    
    this.route.params.subscribe(params => {
      this.classification = params['classification'];
      this.getProductsFromService();
    }, ()=>{
    });

    this.route.queryParams.subscribe((query)=>{
      this.type = query['type'];
      this.getProductsFromService();
    })
  }

  getProductsFromService(){
    if(this.classification && this.type){
        this.getProductsFromServiceWithThisType();
      }else{
        this.productService.getProducts(this.classification, "").subscribe((items)=>{
          this.products = items;
        });
      }
  }

  getProductsFromServiceWithThisType(){
    this.productService.getProductsOfThisType(this.classification, this.type).then((items)=>{
      this.products = items;
    })
  }

}
