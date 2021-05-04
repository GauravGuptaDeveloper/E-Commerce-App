import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserValid: Subject<boolean>;

  constructor(private userService: UserService) { 
    this.isUserValid = new Subject<boolean>();
  }

  checkUserLoginCredentials(loggingUser: User){
    return new Observable((observer)=>{
      let valid = false;
      this.userService.getUsers().subscribe(
        (response)=>{
          response.forEach(user => {
            if(loggingUser.email===user.email && loggingUser.password===user.password){
              this.isUserValid.next(true);
              observer.next(true);
              valid = true;
            }
          });
          if(!valid){
            observer.next(false);
          }
        },
        (err)=>{
          console.error("Error in Login Service. Line 24", err);
          this.isUserValid.next(false);
          observer.next(false);
        }
      );
    });
  }

  setLogInSessionStorage(){
    this.isUserValid?sessionStorage.setItem('loggedIn', "true"):'';
  }

  getLogInSessionStorage(){
    if(sessionStorage.getItem('loggedIn')=="true"){
      this.isUserValid.next(true);
      return true;
    }else{
      this.isUserValid.next(false);
      return false;
    }
  }

  deleteLoggedInSessionStorage(){
    sessionStorage.removeItem('loggedIn');
    this.isUserValid.next(false);
  }
}

