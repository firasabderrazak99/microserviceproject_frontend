import { RouterModule, Routes } from '@angular/router';
import { ExploitationComponent } from './component/exploitation/exploitation.component';
import { SupervisionComponent } from './component/supervision/SupervisionComponent';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DonneeMeteoComponent } from './component/donnee-meteo/donnee-meteo.component';
import { DonneeCapteurComponent } from './component/donnee-capteur/donnee-capteur.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  { path: '', redirectTo: 'exploitations', pathMatch: 'full' },
   { path: '', redirectTo: '/donnees-meteo', pathMatch: 'full' },
  { path: 'donnees-meteo', component: DonneeMeteoComponent },
  { path: 'donnees-capteur', component: DonneeCapteurComponent },
  { path: 'exploitations', component: ExploitationComponent },
  { path: 'supervision', component: SupervisionComponent },
  { path: 'dashboard', component: DashboardComponent }

];@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
