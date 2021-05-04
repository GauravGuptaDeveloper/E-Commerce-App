import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CanDeactivate, Router } from '@angular/router';
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
  isPaymentDone: boolean = false;

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
    of(null).pipe(delay(2000)).subscribe(()=>{

    }, ()=>{}, ()=>{
      if(this.totalCost==0){
        alert("Price is Rs. 0");
        this.router.navigate(['product'])
      }else{
        this.cartService.removeAllItems();
        this.isSpinning = false;
        this.checkoutForm.enable();
        this.isPaymentDone = true;
        this.router.navigate(['payment']);
      }
    })
  }

  canDeactivate(){    
    if(!this.isPaymentDone){
      return confirm("Do you want to want to cancel the payment?")
    }else{
      return true;
    }
  }
}
