import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = "http://localhost:7001/api/senhemo/v1/admins/auth"
  constructor(private http: HttpClient) { }
  login(body: Object){

    return this.http.post(this.apiUrl, body);
  }
}
