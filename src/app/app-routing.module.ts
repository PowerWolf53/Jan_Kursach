import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingLayoutComponent} from './modules/landing/landing-layout/landing-layout.component';


const routes: Routes = [
  { path: 'landing', component: LandingLayoutComponent },
  { path: '',  redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
