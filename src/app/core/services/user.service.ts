import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_API_URL: string = '/assets/templates/users.json';

  constructor(private userReadOnlyHttp: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.userReadOnlyHttp.get<User[]>(this.USER_API_URL);
  }
  
}
