import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuAdminComponent } from './admin-user/components/menu-admin/menu-admin.component';
import { MenuComponent } from './map-operations/components/menu/menu.component';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: './logged/logged.module#LoggedModule'
  },
  {
    path: 'admin',
    component: MenuAdminComponent,
    loadChildren: './admin-user/admin-user.module#AdminUserModule'
  },
  {
    path: 'map',
    component: MenuComponent,
    loadChildren: './map-operations/map-operations.module#MapOperationsModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
