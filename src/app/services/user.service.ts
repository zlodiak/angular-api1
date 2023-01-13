import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.get('http://127.0.0.1:8000/users',{ headers });

    // return of([
    //   { pk: 1, fields: { name: 'user11', position: 'code11' } }
    // ]);
  }

}
