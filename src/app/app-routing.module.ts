import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '../services/authGuard';
import { DetailsScreenComponent } from './pages/details-screen/details-screen.component';
import { FamilyTreeComponent } from './pages/family-tree/family-tree.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'details-screen', component: DetailsScreenComponent, canActivate: [AuthGuard]},
  { path: 'family-tree', component: FamilyTreeComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
