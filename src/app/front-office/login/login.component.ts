import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false
  admin: any

  ngOnInit(): void { }

  constructor(
    private authService: LoginService,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) { }

  sleep = async (milliseconds: number) => {
    await new Promise(resolve => {
      return setTimeout(resolve, milliseconds)
    });
  };

  // mail et mot de passe
  email = new FormControl("", [Validators.required, Validators.email])
  password = new FormControl("", [Validators.required])

  /**
   * authentification
   */
  async login() {
    this.isLoading = true;
    // this.authService.login({ email: this.email.value, password: this.password.value }).subscribe(
    //   (res) => {
    //     if (res) {
    //       this.admin = res
    //       localStorage.setItem("id", this.admin.id)
    //       localStorage.setItem("email", this.admin.email)
    //       localStorage.setItem("lastname", this.admin.lastname)
    //       localStorage.setItem("firstname", this.admin.firstname)
    //       this.router.navigate(['/admin/'])
    //     } else {
    //       this.toastr.error("Mail et/ou mot de passe incorrect.", "Authentification");
    //     }
    //     this.isLoading = false
    //   },
    //   (error) => {
    //     this.isLoading = false
    //     this.toastr.error(error.message, "Erreur Serveur");
    //   }
    // )

    this.authService.login({ email: this.email.value, password: this.password.value }).subscribe({
      next: ((res) => {
        if (res) {
          this.admin = res
          localStorage.setItem("id", this.admin.id)
          localStorage.setItem("email", this.admin.email)
          localStorage.setItem("lastname", this.admin.lastname)
          localStorage.setItem("firstname", this.admin.firstname)
          this.router.navigate(['/admin/'])
        } else {
          this.toastr.error("Mail et/ou mot de passe incorrect.", "Authentification");
        }
        this.isLoading = false
      }),
      error: ((error) => {
        this.isLoading = false
        this.toastr.error(error.message, "Erreur Serveur");
      })
    })

  }
}
