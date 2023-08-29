import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { AuthenticateComponent } from './authenticate.component';
import { ReactiveFormsModule } from '@angular/forms';
// import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AuthenticateComponent
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticateModule { }
