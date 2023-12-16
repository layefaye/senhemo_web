import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BankService } from 'src/app/services/bank.service';
import { MapComponent } from 'src/app/shared/map/map.component';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.css']
})
export class ListBankComponent {


  type: any
  banks: any = [];
  isLoading = true;
  constructor(private route_a: ActivatedRoute,private toastr: ToastrService,private bankService: BankService, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.route_a.paramMap.subscribe(params => {
      this.type = params.get('type'); 
      this.choiseDisplayBank(this.type)
     
    });

   
  }


  choiseDisplayBank(type: string){
    switch(type){
      case "all":
        this.findAllBank()
        break
      case "enable":
        this.findAllEnable()
        break
      case "disable":
        this.findAllDesable()
        break
      default:
        break
    }
  }

  findAllBank() {
    this.bankService.findAll().subscribe((res: any) => {
      this.banks = res
      this.isLoading = false
    })
  }

  findAllDesable() {
    this.bankService.findAllDesable().subscribe((res: any) => {
      this.banks = res
      this.isLoading = false
    })
  }

  findAllEnable() {
    this.bankService.findAllEnable().subscribe((res: any) => {
      this.banks = res
      this.isLoading = false
    })
  }

  enableBank(id: Number, type: string) {
    this.isLoading = true
    this.bankService.changeBankStatus(id).subscribe((res: any) => {
      this.toastr.success(res.message,"Mis à jour statut banque")
      this.choiseDisplayBank(type)
      this.isLoading = false
    })
    }

    showMap(data: Object){
      sessionStorage.setItem("mapType","bank")
      let dialogRef = this.dialog.open(MapComponent, {
        width: '1000px',
        data: data
      });
    
      dialogRef.afterClosed().subscribe(result => {
        // this.animal = result;
      });
    }

    searchValue = ''

    // searchWithFirsName(event: Event) {
    //   const filterValue = (event.target as HTMLInputElement).value.trim();
    //   this.searchValue = filterValue
    //   if (filterValue.length !== 0) {
  
    //      this.banks.searchWithFirsName(filterValue).subscribe((res: any) => {
    //       this.banks = res
          
    //     })
    //   }else{
    //     this.findAllBank()
    //   }
    // }

    searchWithFirsName(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value.trim();
      this.searchValue = filterValue
      if (filterValue.length !== 0) {
  
         this.bankService.searchWithFirsName(filterValue).subscribe((res: any) => {
          this.banks = res
        })
      }else{
        this.findAllBank()
      }
    }
}
