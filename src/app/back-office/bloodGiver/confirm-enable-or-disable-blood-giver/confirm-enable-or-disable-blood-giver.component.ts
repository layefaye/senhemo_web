import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BloodGiverService } from 'src/app/services/blood-giver.service';

@Component({
  selector: 'app-confirm-enable-or-disable-blood-giver',
  templateUrl: './confirm-enable-or-disable-blood-giver.component.html',
  styleUrls: ['./confirm-enable-or-disable-blood-giver.component.css']
})
export class ConfirmEnableOrDisableBloodGiverComponent {
  constructor(private bloodGiverService: BloodGiverService, private toastr: ToastrService,
    public dialogRef: MatDialogRef<ConfirmEnableOrDisableBloodGiverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
    this.dialogRef.close();
  }


  enableOrDisabled(id: string) {
    this.bloodGiverService.enableOrDisable(id).subscribe({
      next: ((res) => {
        this.toastr.success("Statut donneur mis a jour", "Changement Status")
        this.dialogRef.close();
      }),
      error: ((error) => {
        this.toastr.success(error.message, "Erreur")
      })
    })
  }
}
