import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { InputsLoginComponent } from './components/inputs-login/inputs-login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { Bell, ChevronDown, CircleUserRound, LucideAngularModule, Menu } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InputsLoginComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ Menu, Bell, CircleUserRound, ChevronDown })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
