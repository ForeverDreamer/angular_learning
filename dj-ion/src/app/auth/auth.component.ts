import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import { AuthAPIService } from './auth.service';
import { AuthLoginData } from './auth';
import { User } from './user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  userData: User;
  loginForm: FormGroup;
  usernameField: FormControl;
  passwordField: FormControl;

  constructor(private authAPI: AuthAPIService) { }

  ngOnInit() {
    this.usernameField = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(280)
    ]);
    this.passwordField = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(280)
    ]);
    this.loginForm = new FormGroup({
      usernameField: this.usernameField,
      passwordField: this.passwordField,
    });
  }

  doLogin(authLoginData: AuthLoginData) {
    this.authAPI.login(authLoginData).subscribe(resData => {
      this.userData = resData as User;
    });
  }

  handleSubmit(event: any, ourLoginDir: NgForm, loginFormGroup: FormGroup) {
    event.preventDefault();
    if (ourLoginDir.submitted) {
      // interact with the server
      console.log(loginFormGroup.value);
      const authLoginData = new AuthLoginData(
        loginFormGroup.value.usernameField,
        loginFormGroup.value.passwordField
      );
      console.log(authLoginData);
      this.doLogin(authLoginData);
      ourLoginDir.resetForm({});
    }
  }

}
