import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'authenticate', loadChildren: () => import('./front-office/authenticate/authenticate.module').then(m => m.AuthenticateModule) }, { path: 'admin', loadChildren: () => import('./back-office/admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
