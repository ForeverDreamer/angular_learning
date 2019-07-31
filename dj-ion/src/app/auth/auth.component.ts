import { Component, OnInit } from '@angular/core';

import { AuthAPIService } from './auth.service';
import { AuthLoginData } from './auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authData: any;

  constructor(private authAPI: AuthAPIService) { }

  ngOnInit() {
    const authLoginData = new AuthLoginData('admin', 'password123')
    this.doLogin(authLoginData);
  }

  doLogin(authLoginData: AuthLoginData) {
    this.authAPI.login(authLoginData).subscribe(resData => {
      this.authData = resData;
    });
  }

}
