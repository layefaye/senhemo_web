import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-blood-giver',
  templateUrl: './detail-blood-giver.component.html',
  styleUrls: ['./detail-blood-giver.component.css']
})
export class DetailBloodGiverComponent {
  constructor(private router: Router,
    public dialogRef: MatDialogRef<DetailBloodGiverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onCancel(): void {
      this.dialogRef.close();
    }
  
    showDonate(data: any){
      console.log("show donate!")
      this.router.navigate(['/admin/blood-givers/show-donate/'+data.id+"/"+data.bloodGroup])
      this.dialogRef.close();
    }
}
