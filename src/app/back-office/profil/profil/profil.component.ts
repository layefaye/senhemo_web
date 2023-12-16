import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BloodGiverHelpersService } from 'src/app/helpers/blood-giver-helpers.service';
import { BloodBagService } from 'src/app/services/blood-bag.service';
import { BloodGiverService } from 'src/app/services/blood-giver.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  currentPassword = '';
  newPassword = '';
  firstName = ""
  lastName = ""
  constructor(private bloodGiverService: BloodGiverService,private toastr: ToastrService) {}
  ngOnInit(): void {
    // this.updatePassword();
  }


  updatePassword() {
    console.log(sessionStorage.getItem('id'))
    this.bloodGiverService.updatePassword({
      "oldPass": this.currentPassword,
      "newPass": this.newPassword,
      
      "id": sessionStorage.getItem('id')
    }).subscribe((res: any)=>{
      if (res.data === true) {
        this.toastr.success(res.message,"Changement mot de passe")
      console.log(res)
      this.currentPassword = ""
      this.newPassword = ""
      } else {
        this.toastr.error(res.message,"Changement mot de passe")
      }
      
    })
  }
}
