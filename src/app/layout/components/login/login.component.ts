import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { User } from 'src/app/core/models/user';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])  
  });

  user: User;

  isSpinning: boolean = false;

  public get email(){
    return this.loginForm.get('email');
  }

  
  public get password() {
    return this.loginForm.get('password');
  }
  

  constructor(private loginService: LoginService, private router: Router) { 
    this.user = {}
  }

  ngOnInit(): void {
  }

  checkUserValidity(){
    this.user = this.loginForm.value;
    this.isSpinning = true;
    this.loginForm.disable();
    this.loginService.checkUserLoginCredentials(this.user).pipe(delay(1500)).subscribe((res)=>{
      if(res){
        this.loginForm.enable();
        this.loginService.setLogInSessionStorage();
        this.loginForm.reset();
        this.router.navigate(['home']);
      }else{
        alert("Wrong Email or Password");
        this.loginForm.reset();
        this.loginForm.enable();
      }
      this.isSpinning = false;
    }, (err)=>{
      console.log(err);
      this.isSpinning = false;
    });
  }

}
