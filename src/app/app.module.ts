import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingModule } from './layouts/landing/landing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, } from '@angular/common/http';
import { UsersComponent } from './pages/users/users.component';
import { DataComponent } from './pages/users_data/data.component';
import { UserDataComponent } from './pages/user-data/user-data.component';
import { FilterPipe } from './shared/filter.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DataComponent,
    UserDataComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LandingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
