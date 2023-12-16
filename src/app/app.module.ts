import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './front-office/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './back-office/home/home.component';
import { FooterComponent } from './back-office/template/footer/footer.component';
import { NavComponent } from './back-office/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ListBloodGiverComponent } from './back-office/bloodGiver/list-blood-giver/list-blood-giver.component';
import { DetailBloodGiverComponent } from './back-office/bloodGiver/detail-blood-giver/detail-blood-giver.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmEnableOrDisableBloodGiverComponent } from './back-office/bloodGiver/confirm-enable-or-disable-blood-giver/confirm-enable-or-disable-blood-giver.component';
import { ShowDonateComponent } from './back-office/bloodGiver/show-donate/show-donate.component';
import { DetailBloodBagComponent } from './back-office/bloodGiver/detail-blood-bag/detail-blood-bag.component';
import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';
import { MapComponent } from './shared/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ListBankComponent } from './back-office/bank/list-bank/list-bank.component';
import { ProfilComponent } from './back-office/profil/profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    ListBloodGiverComponent,
    DetailBloodGiverComponent,
    ConfirmEnableOrDisableBloodGiverComponent,
    ShowDonateComponent,
    DetailBloodBagComponent,
    MapComponent,
    ListBankComponent,
    ProfilComponent,
    
  ],
  imports: [
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    LeafletModule,
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
