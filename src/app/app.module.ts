import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlueColoredDirective } from './blue-colored.directive';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { 
  	path: 'dashboard', 
    component: DashboardComponent
  },
  { 
  	path: 'login', 
    component: LoginComponent
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlueColoredDirective,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

