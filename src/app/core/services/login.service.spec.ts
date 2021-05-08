import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { from, of } from 'rxjs';

import { LoginService } from './login.service';
import { UserService } from './user.service';
import {User} from '../models/user'

describe('LoginService', () => {
  let service: LoginService;
  let userServiceStub: Partial<UserService>;

  beforeEach(() => {
    
    userServiceStub = {
      getUsers(){
        const user: User[] = [{email:'test@gmail.com', 'password':'12345678'}];
        return of(user);
      }
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: UserService, useValue: userServiceStub }]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login successful', fakeAsync(()=>{
    service.checkUserLoginCredentials({'email':'test@gmail.com', 'password':'12345678'}).subscribe((response)=>{
      expect(response).toBeTruthy();
    });
  }))

  it('login not successful', fakeAsync(()=>{
    service.checkUserLoginCredentials({'email':'test@gmail.com', 'password':'1234678'}).subscribe((response)=>{
      expect(response).toBeFalsy();
    });
  }))

});
