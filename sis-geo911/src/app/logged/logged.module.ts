import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoggedRoutingModule } from './logged-routing.module';
import { MaterialModule } from '../material.module';

import { UserLoggedComponent } from './components/user-logged/user-logged.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { FormControl, Validators } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent,  UserLoggedComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
    // FormControl,
    // Validators
  ],
  exports: []
})
export class LoggedModule { }
