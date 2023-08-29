import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodTypeService } from 'src/app/services/blood-type.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  bloodTypes: any
  isLoading = true;
  firstname: any
  lastname: any

  constructor(
    private bloodTypeService: BloodTypeService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.firstname = localStorage.getItem("firstname")
    this.lastname = localStorage.getItem("lastname")
    // this.findAllBloodType()
  }

  findAllBloodType(){

    this.bloodTypeService.findAll().subscribe((res)=>{
      console.log(res)
      this.bloodTypes = res
      this.isLoading = false
    })
  }

  goToListBloodGiver(type: string){
    switch(type){
      case 'all':
        this.router.navigate(['/admin/blood-givers/list-blood-giver/all'])
        break
      case 'enable':
        this.router.navigate(['/admin/blood-givers/list-blood-giver/enable'])
        break
      case 'disable':
        this.router.navigate(['/admin/blood-givers/list-blood-giver/disable'])
        break
      default:
        break
    }
  }
}
