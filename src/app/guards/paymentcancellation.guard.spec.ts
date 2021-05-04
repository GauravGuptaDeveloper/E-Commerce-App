import { TestBed } from '@angular/core/testing';

import { PaymentcancellationGuard } from './paymentcancellation.guard';

describe('PaymentcancellationGuard', () => {
  let guard: PaymentcancellationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaymentcancellationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
