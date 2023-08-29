import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BloodGiverHelpersService {

  constructor() { }

  formatBloodType(list: any[]) {
    let newList: any[] = []
    list.forEach(element => {

      switch (element.bloodGroup) {
        case 'AB_MOIN':
          element.bloodGroup = "AB-"
          newList.push(element)
          break
        case 'AB_PLUS':
          element.bloodGroup = "AB+"
          newList.push(element)
          break
        case 'A_MOIN':
          element.bloodGroup = "A-"
          newList.push(element)
          break
        case 'A_PLUS':
          element.bloodGroup = "A+"
          newList.push(element)
          break
        case 'B_MOIN':
          element.bloodGroup = "B-"
          newList.push(element)
          break
        case 'B_PLUS':
          element.bloodGroup = "B+"
          newList.push(element)
          break
        case 'O_MOIN':
          element.bloodGroup = "O-"
          newList.push(element)
          break
        case 'O_PLUS':
          element.bloodGroup = "O+"
          newList.push(element)
          break
        default:
          break

      }
    });
    return newList
  }


  
}
