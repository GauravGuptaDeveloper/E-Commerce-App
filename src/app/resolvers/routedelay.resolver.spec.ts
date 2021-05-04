import { TestBed } from '@angular/core/testing';

import { RoutedelayResolver } from './routedelay.resolver';

describe('RoutedelayResolver', () => {
  let resolver: RoutedelayResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RoutedelayResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
