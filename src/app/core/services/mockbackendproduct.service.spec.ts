import { TestBed } from '@angular/core/testing';

import { MockBackendProduct } from './mockbackendproduct.service';

describe('MockBackendProduct', () => {
  let service: MockBackendProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockBackendProduct);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
