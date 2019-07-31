import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


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

  login(data: any): Observable<any> {
    const apiLoginEndpoiut = `${this.baseUrl}auth/`;
    return this.http.post(apiLoginEndpoiut, data, httpOptions);
  }

  register(data: any): Observable<any> {
    const apiRegisterEndpoiut = `${this.baseUrl}auth/register/`;
    return this.http.post(apiRegisterEndpoiut, data, httpOptions);
  }


}
