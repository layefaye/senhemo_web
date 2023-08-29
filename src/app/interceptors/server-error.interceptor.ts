import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(private Toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if(event.status == 401) {
              alert("Vous ne disposz pas les autorisations necessaire pour effectuer cette action")
              this.Toastr.success("hello","Message")
            }
          }
          return event;
        },
        error: (error) => {
          if(error.status === 401) {
            this.Toastr.success("Acces non autoriser","Acces")

          }
          else if(error.status === 404) {
            this.Toastr.success("Page introuvable","Chargement Page")
          } else if(error.status === 500){
            this.Toastr.success("Erreur serveur","Erreur Serveur")
          }else if(error.status === 503){
            this.Toastr.success("Serveur indisponible","Erreur Serveur")

          }
        }
      }));
  }
}
