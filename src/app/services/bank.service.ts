import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  
  

  apiUrl = "http://localhost:7002/api/senhemo/v1/banks"
  constructor(private http: HttpClient) {
  }


  findAll(){
    return this.http.get<any>(this.apiUrl+'/all');
  }

  findAllDesable(){
    return this.http.get<any>(this.apiUrl+'/disable');
  }

  findAllEnable(){
    return this.http.get<any>(this.apiUrl);
  }

  changeBankStatus(id: Number) {
    return this.http.get<any>(this.apiUrl+'/changebankstatus/'+id);
  }

  searchWithFirsName(filterValue: string) {
    return this.http.get<any>(this.apiUrl+'/search/'+filterValue);
  }
}
