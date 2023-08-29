import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodGiverService } from 'src/app/services/blood-giver.service';
import { Location } from '@angular/common';
import { BloodGiverHelpersService } from 'src/app/helpers/blood-giver-helpers.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailBloodBagComponent } from '../detail-blood-bag/detail-blood-bag.component';

@Component({
  selector: 'app-show-donate',
  templateUrl: './show-donate.component.html',
  styleUrls: ['./show-donate.component.css']
})
export class ShowDonateComponent  implements OnInit{
  id: any = ''
  bloodBags: any
  isLoading = true
  bloodGroup: any = ''

  ngOnInit(): void {
  this.getBloodGiverId()
  }

  constructor(private dialog: MatDialog,private bloodGiverHelper: BloodGiverHelpersService,private location: Location, private bloodGiverService: BloodGiverService, private router_a: ActivatedRoute){}


  /**
   * liste des poche de sang d'un donneur
   */
  findBloodBagsByBloodGiverId(){
    this.bloodGiverService.findBloodBagsByIdBloodGiver(this.id).subscribe({
      next: ((res: any)=>{
        console.log(res)
        this.bloodBags = this.bloodGiverHelper.formatBloodType(res)
        this.isLoading = false
      })
    })
  }

  goBack(){
    this.location.back()
  }

  /**
   * recuperation de l'id du donneur sur l'url
   */
  getBloodGiverId(){
    this.isLoading = true
    this.router_a.paramMap.subscribe(params => {
      this.id = params.get('id'); // 
      this.bloodGroup = params.get('bloodGroup');
      this.findBloodBagsByBloodGiverId()
    });
  }


  showBloodBagDetail(data: any){
    let dialogRef = this.dialog.open(DetailBloodBagComponent, {
      width: '500px',
      data: data
    });
    
    dialogRef.afterClosed().subscribe(result => {
      
        
    });
  }
}
