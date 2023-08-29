import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private toastr: ToastrService){}
  firstname: any
  lastname: any
  message = ''

  ngOnInit(): void {
    this.firstname = localStorage.getItem("firstname")
    this.lastname = localStorage.getItem("lastname")
    this.message = "Bienvenun "+this.firstname+" "+this.lastname;
    if(!localStorage.getItem("isLogin")){
      localStorage.setItem("isLogin","ok")
      this.toastr.success(this.message,"Authentification reussie")
    }
  }

}
