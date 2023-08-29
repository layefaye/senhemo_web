import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {
  apiUrl = "http:localhost:7004/api/senhemo/v1/banks"
  constructor(private http: HttpClient) { }


  findAllBanks(){
    // this.ht
  }
}
