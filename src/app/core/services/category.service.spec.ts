import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { Category } from '../models/category';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get categories', fakeAsync(inject([HttpTestingController],(backend: HttpTestingController)=>{
    const url = service.CATEGORY_API_URL;
    const responseObject: Category[] = [{
      classification: 'gadgets',
      type: ['mobile', 'pc']
    }];
    let response: Category[] = [];

    service.getCategories().subscribe((categories)=>{
      response = categories;
    })

    const requestWrapper = backend.expectOne({url});
    requestWrapper.flush(responseObject);

    tick();
    
    expect(requestWrapper.request.method).toEqual('GET');
    expect(response).toEqual(responseObject);
  })))

});
