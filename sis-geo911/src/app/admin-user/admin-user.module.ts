// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { AdminUserRoutingModule } from './admin-user-routing.module';
import { MaterialModule } from '../material.module';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminRegistroComponent } from './components/admin-registro/admin-registro.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './components/admin-delete/admin-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    MenuAdminComponent,
    AdminUsersComponent,
    AdminRegistroComponent,
    AdminEditComponent,
    AdminDeleteComponent],
  imports: [
    CommonModule,
    AdminUserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminUserModule { }
