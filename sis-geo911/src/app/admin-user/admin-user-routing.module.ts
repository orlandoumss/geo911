import { NgModule } from '@angular/core';

// Rutas
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { AdminDeleteComponent } from './components/admin-delete/admin-delete.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminRegistroComponent } from './components/admin-registro/admin-registro.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';


const routes: Routes = [
  {
    path: 'admin',
    component: MenuAdminComponent,
    children: [
      {
         path: '',
         redirectTo: '/registro',
         pathMatch: 'full'
      },
      {
        path: 'eliminar',
        component: AdminDeleteComponent
      },
      {
        path: 'editar',
        component: AdminEditComponent
      },
      {
        path: 'registro',
        component: AdminRegistroComponent,
        children: [{
          path: 'buscar',
          component: AdminEditComponent
        }
        ]
      },
      {
        path: 'usuarios',
        component: AdminUsersComponent
      }

    ]
  }
  // {
  //   path: 'menuadmin',
  //   component: MenuAdminComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUserRoutingModule { }
