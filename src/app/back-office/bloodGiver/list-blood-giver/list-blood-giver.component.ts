import { Component, OnInit } from '@angular/core';
import { BloodGiverHelpersService } from 'src/app/helpers/blood-giver-helpers.service';
import { BloodGiverService } from 'src/app/services/blood-giver.service';

import {MatDialog} from '@angular/material/dialog';
import { DetailBloodGiverComponent } from '../detail-blood-giver/detail-blood-giver.component';
import { ConfirmEnableOrDisableBloodGiverComponent } from '../confirm-enable-or-disable-blood-giver/confirm-enable-or-disable-blood-giver.component';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs';
import { MapComponent } from 'src/app/shared/map/map.component';

@Component({
  selector: 'app-list-blood-giver',
  templateUrl: './list-blood-giver.component.html',
  styleUrls: ['./list-blood-giver.component.css']
})
export class ListBloodGiverComponent implements OnInit {
  bloodGivers: any = []
  isLoading = true;
  searchValue = ''
  displayedColumns: string[] = ['profil', 'firstname', 'lastname', 'email', 'bloodGroup'];
  type: any


  constructor(private route_a: ActivatedRoute,private toastr: ToastrService,private bloodGiverService: BloodGiverService, private bloodGiverHelpers: BloodGiverHelpersService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route_a.paramMap.subscribe(params => {
      this.type = params.get('type'); 
      console.log(this.type)
      switch(this.type){
        case "all":
          this.findAllBloodGiver()
          break
        case "enable":
          this.displayEnableBloodGivers()
          break
        case "disable":
          this.displayDisableBloodGivers()
          break
        default:
          break
      }
    });
    
  }


  // recuperer l'ensemble des donneur
  findAllBloodGiver() {
    this.bloodGiverService.findAll().subscribe((res: any) => {
      this.bloodGivers = this.bloodGiverHelpers.formatBloodType(res)
      console.log(this.bloodGivers)
      this.isLoading = false
    })
  }

  displayDisableBloodGivers(){
    return this.bloodGiverService.displayDisableBloodGivers().subscribe({
      next : ((res) =>{
        this.bloodGivers = this.bloodGiverHelpers.formatBloodType(res)
        this.isLoading = false;
      }),
      error: ((error)=>{
        this.toastr.error(error.message,"Error")
        this.isLoading = false
      })
    })
  }

  displayEnableBloodGivers(){
    return this.bloodGiverService.displayEnableBloodGivers().subscribe({
      next : ((res) =>{
        this.bloodGivers = this.bloodGiverHelpers.formatBloodType(res)
        this.isLoading = false
      }),
      error: ((error)=>{
        this.toastr.error(error.message,"Error")
        this.isLoading = false
      })
    })
  }

  // rechercher donneur via son prenom
  searchWithFirsName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim();
    this.searchValue = filterValue
    if (filterValue.length !== 0) {

       this.bloodGiverService.searchWithFirsName(filterValue).subscribe((res: any) => {
        this.bloodGivers = this.bloodGiverHelpers.formatBloodType(res)
        console.log(this.bloodGiverHelpers.formatBloodType(res))
      })
    }else{
      this.findAllBloodGiver()
    }
  }

  showDetail(data: Object){
    let dialogRef = this.dialog.open(DetailBloodGiverComponent, {
      width: '500px',
      data: data
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }


  showMap(data: Object){
    let dialogRef = this.dialog.open(MapComponent, {
      width: '1000px',
      data: data
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  enableOrDisableBloodGiver(data: Object, message: string){
    
    let data_ = {
      data,
      message
    }
    let dialogRef = this.dialog.open(ConfirmEnableOrDisableBloodGiverComponent, {
      width: '500px',
      data: data_
    });
    
    dialogRef.afterClosed().subscribe(result => {
      switch(this.type){
        case "all":
          this.findAllBloodGiver()
          break
        case "enable":
          this.displayEnableBloodGivers()
          break
        case "disable":
          this.displayDisableBloodGivers()
          break
        default:
          break
      }
    });
  }


}




