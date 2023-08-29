import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-blood-bag',
  templateUrl: './detail-blood-bag.component.html',
  styleUrls: ['./detail-blood-bag.component.css']
})
export class DetailBloodBagComponent {
  constructor(private router: Router,private dialog: MatDialog,
    public dialogRef: MatDialogRef<DetailBloodBagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onCancel(): void {
      this.dialogRef.close();
    }

    
}
