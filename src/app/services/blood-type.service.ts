import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BloodTypeService {

  apiUrl = "http://localhost:7002/api/senhemo/v1/bloodtypes"
  constructor(private http: HttpClient) { }


  findAll(){
    return this.http.get(this.apiUrl+"/findall");
  }
}
