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

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
    this.searchText = ""
  }
  
  ngOnInit(): void {
    // for search text.
    this.searchService.typeSubject.subscribe((value)=>{
      this.searchText = value;
    })
    this.route.data.subscribe((data)=>{
      this.products = data.products;
    }, (err)=>{
      console.log("Error");
    }) 
  }
}
