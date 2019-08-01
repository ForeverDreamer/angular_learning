import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Status } from './status';


@Injectable({
  providedIn: 'root'
})
export class StatusAPIService {

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

  list(): Observable<any> {
    const apiListEndpoiut = `${this.baseUrl}status/`;
    return this.http.get(apiListEndpoiut);
  }

  get(id: number): Observable<Status> {
    const apiDetailEndpoiut = `${this.baseUrl}status/${id}/`;
    return this.http.get<Status>(apiDetailEndpoiut);
  }
}
