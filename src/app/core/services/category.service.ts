import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public CATEGORY_API_URL: string = '/assets/templates/category.json';

  constructor(private categoryReadOnlyHttp: HttpClient) { }

  getCategories(){
    return this.categoryReadOnlyHttp.get<Category[]>(this.CATEGORY_API_URL);
  }

}
