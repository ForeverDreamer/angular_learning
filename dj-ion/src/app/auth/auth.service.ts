import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthLoginData } from './auth';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {
  }

  login(data: AuthLoginData): Observable<any> {
    const apiLoginEndpoiut = `${this.baseUrl}auth/`;
    return this.http.post(apiLoginEndpoiut, data, httpOptions);
  }

  register(data: any): Observable<any> {
    const apiRegisterEndpoiut = `${this.baseUrl}auth/register/`;
    return this.http.post(apiRegisterEndpoiut, data, httpOptions);
  }


}
