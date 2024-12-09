import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { InputsLoginComponent } from './components/inputs-login/inputs-login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { Bell, ChevronDown, CircleUserRound, House, LucideAngularModule, Menu } from 'lucide-angular';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponentComponent } from './components/home/search-component/search-component.component';
import { HomeListComponent } from './components/home/home-list/home-list.component';
import { ListComponentComponent } from './components/home/home-list/list-component/list-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InputsLoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    SearchComponentComponent,
    HomeListComponent,
    ListComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ Menu, Bell, CircleUserRound, ChevronDown, House }),
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
