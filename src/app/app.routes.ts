import { Routes } from '@angular/router';
import { ExploitationComponent } from './component/exploitation/exploitation.component';
import { SupervisionComponent } from './component/supervision/SupervisionComponent';
import { DashboardComponent } from './component/dashboard/dashboard.component';
export const routes: Routes = [
  { path: '', redirectTo: 'exploitations', pathMatch: 'full' },
  { path: 'exploitations', component: ExploitationComponent },
  { path: 'supervision', component: SupervisionComponent },
  { path: 'dashboard', component: DashboardComponent }

];
