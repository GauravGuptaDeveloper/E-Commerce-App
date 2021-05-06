import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  cartItemCount: number = 0;

  constructor(private loginService: LoginService, private router: Router, private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.loginService.isUserValid.subscribe((isLoggedIn)=>{
      this.isUserLoggedIn = isLoggedIn;
    })

    this.loginService.getLogInSessionStorage();

    this.cartService.cartItemsNotifier.subscribe((carts)=>{
      this.cartItemCount = carts.length;
    })
  }

  logOutSession(){
    this.loginService.deleteLoggedInSessionStorage();
    this.router.navigate(['login']);
  }

}
