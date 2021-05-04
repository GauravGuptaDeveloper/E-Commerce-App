import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  totalCost: number;
  isSpinning: boolean = false;

  checkoutForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    shippingAddress: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
  });

  get email(){
    return this.checkoutForm.get('email');
  }
  
  public get name() {
    return this.checkoutForm.get('name');
  }

  get shippingAddress(){
    return this.checkoutForm.get('shippingAddress');
  }

  
  public get phoneNumber() {
    return this.checkoutForm.get('phoneNumber');
  }

  constructor(private cartService: CartService, private fb: FormBuilder, private router: Router) { 
    this.totalCost = 0;
  }

  ngOnInit(): void {
    this.totalCost = this.cartService.getTotalCost();
  }

  checkoutFormSubmit(){
    this.isSpinning = true;
    this.checkoutForm.disable();
    // fromEvent use cases....
    of(null).pipe(delay(2000)).subscribe(()=>{

    }, ()=>{}, ()=>{
      this.cartService.removeAllItems();
      this.isSpinning = false;
      this.checkoutForm.enable();
      this.router.navigate(['payment']);
    })
  }

}
