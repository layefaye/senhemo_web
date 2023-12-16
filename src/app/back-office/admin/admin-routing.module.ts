import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ListBloodGiverComponent } from '../bloodGiver/list-blood-giver/list-blood-giver.component';
import { DetailBloodGiverComponent } from '../bloodGiver/detail-blood-giver/detail-blood-giver.component';
import { ShowDonateComponent } from '../bloodGiver/show-donate/show-donate.component';
import { ListBankComponent } from '../bank/list-bank/list-bank.component';
import { ProfilComponent } from '../profil/profil/profil.component';

const routes: Routes = [
  { path: '', component: HomeComponent,  },

  // Donneur
  {path:'blood-givers/list-blood-giver/:type', component: ListBloodGiverComponent},
  {path: 'blood-givers/detail-blood-giver/:id', component: DetailBloodGiverComponent},
  {path: 'blood-givers/show-donate/:id/:bloodGroup', component: ShowDonateComponent},
  {path: 'profil', component: ProfilComponent},


  // Banque
  {path: 'banks/list-bank/:type', component: ListBankComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
