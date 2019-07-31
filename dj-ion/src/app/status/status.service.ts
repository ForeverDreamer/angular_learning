import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Status } from './status';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StatusAPIService {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {
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
