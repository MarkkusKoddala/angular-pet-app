import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harjutus';
  loggedIn: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    const loggedIn = this.loginService.IsLoggedIn();
    console.log(loggedIn);
  }

  logout() {
    this.loginService.user.isLoggedIn = false;
  }
}
