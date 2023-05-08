import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    const isLoggedIn = this.loginService.IsLoggedIn();
    if (isLoggedIn) {
      console.log(this.loginService.user.token);
      return true;
    } else {
      return false;
    }
  }
}

