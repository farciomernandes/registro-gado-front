import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { InputsLoginComponent } from './components/inputs-login/inputs-login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { Bell, ChevronDown, CircleUserRound, House, LucideAngularModule, Menu, Network, Pen, Trash } from 'lucide-angular';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponentComponent } from './components/home/search-component/search-component.component';
import { HomeListComponent } from './components/home/home-list/home-list.component';
import { ListComponentComponent } from './components/home/list-component/list-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DetailsScreenComponent } from './pages/details-screen/details-screen.component';
import { DetailsCreenInputsComponent } from './components/details-creen-inputs/details-creen-inputs.component';
import { NewAnimalModalComponent } from './components/modal/new-animal-modal/new-animal-modal.component';
import { EditAnimalModalComponent } from './components/modal/edit-animal-modal/edit-animal-modal.component';
import { FamilyTreeComponent } from './pages/family-tree/family-tree.component';
import { FamilyTreeButtonsComponent } from './components/family-tree-buttons/family-tree-buttons.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationModalComponent } from './components/modal/notification-modal/notification-modal.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { firebaseConfig } from '../environments/environments';
import { ToastrModule } from 'ngx-toastr';


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
    DetailsScreenComponent,
    DetailsCreenInputsComponent,
    NewAnimalModalComponent,
    EditAnimalModalComponent,
    FamilyTreeComponent,
    FamilyTreeButtonsComponent,
    NotificationModalComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
      newestOnTop: true,
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ Menu, Bell, CircleUserRound, ChevronDown, House, Network, Pen, Trash }),
    BrowserModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideMessaging(() => getMessaging())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
