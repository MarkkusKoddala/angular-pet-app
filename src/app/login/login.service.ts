import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
export interface LoginResponse {
  status: string;
  message: string;
  userToken: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User = new User('', false, '');

  private loginUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable <LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, {username, password});
  }

  IsLoggedIn(){
    return this.user.isLoggedIn;
  }
}



