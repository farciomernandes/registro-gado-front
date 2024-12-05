import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '../services/authGuard';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
