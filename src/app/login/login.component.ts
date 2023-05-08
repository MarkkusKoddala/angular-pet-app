import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from '../user';
import { AppComponent } from '../app.component';



interface LoginResponse {
  status: string;
  message: string;
  userToken: string;
  username: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new Subject<User>();
  userMessage = '';



  constructor(private loginService : LoginService, private route : Router, private appComponent: AppComponent){

  }
  

login(form: NgForm){
  console.log(form.value)
  const username = form.value.username;
  const password = form.value.password;
  this.loginService.login(username, password).subscribe(
    (response: LoginResponse) => {
      if (response.status === 'success') {
        console.log(response.userToken)
        const user = new User(username, true, response.userToken);
        this.loginService.user = user;
        console.log('User logged in successfully with userId: ', user.token);
        this.route.navigate(['/add']);
      } else {
        this.userMessage = response.message;
        console.log('Login failed with message: ', response.message);

      } this.appComponent.loggedIn = true;
    }
  );
}
}
