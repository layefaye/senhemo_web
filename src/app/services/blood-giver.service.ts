import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BloodGiverService {
  apiUrl = "http://localhost:7004/api/senhemo/v1/bloodgivers"
  constructor(private http: HttpClient) {
  }


  /**
   * 
   * @returns la liste des donneurs
   */
  findAll(){
    return this.http.get<any>(this.apiUrl);
  }

   searchWithFirsName(firstname: string){
    return this.http.get(this.apiUrl + '/search/' + firstname);
  }

  /**
   * 
   * @param id identifient du donneur
   * @returns void
   */
  enableOrDisable(id: string){
    return this.http.get<any>(this.apiUrl+"/enableordisable/"+id)
  }


  /**
   * 
   * @returns la liste des donneur avec statut = false
   */
  displayDisableBloodGivers(){
    return this.http.get<any>(this.apiUrl+'/displaydisablebloodgivers');
  }

  /**
   * 
   * @returns la liste des donneurs avec statut = true
   */
  displayEnableBloodGivers(){
    return this.http.get<any>(this.apiUrl+'/displayenablebloodgivers');
  }

  
  /**
   * 
   * @param id identitfient du donneur
   * @returns la liste des poches de sang du donneur 
   */
  findBloodBagsByIdBloodGiver(id: string){
    return this.http.get(this.apiUrl+"/bloodbags/"+id)
  }


}
