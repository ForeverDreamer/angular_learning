import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthLoginData } from './auth';


@Injectable({
  providedIn: 'root'
})
export class AuthAPIService {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {
  }

  createHeaders(token?: string) {
    const data = {
      'Content-Type': 'application/json',
      Authorization: ''
    };
    if (token) {
      data.Authorization = `JWT ${token}`;
    }
    return {
      headers: new HttpHeaders(data)
    };
  }

  login(data: AuthLoginData): Observable<any> {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTY0NjMzMTc5LCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwib3JpZ19pYXQiOjE1NjQ2MzI4Nzl9.hbl-g1Q2sNXt66MsAme4zty80lKhcu2XqLwLtd8iGCM';
    const httpOptions = this.createHeaders(token);
    const apiLoginEndpoiut = `${this.baseUrl}auth/`;
    return this.http.post(apiLoginEndpoiut, data, httpOptions);
  }

  register(data: any): Observable<any> {
    const httpOptions = this.createHeaders();
    const apiRegisterEndpoiut = `${this.baseUrl}auth/register/`;
    return this.http.post(apiRegisterEndpoiut, data, httpOptions);
  }


}
