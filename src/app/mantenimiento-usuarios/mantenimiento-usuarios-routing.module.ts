import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoUsuariosPage } from './mantenimiento-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoUsuariosPage
  },  {
    path: 'mantenimiento-usuarios-add',
    loadChildren: () => import('./mantenimiento-usuarios-add/mantenimiento-usuarios-add.module').then( m => m.MantenimientoUsuariosAddPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoUsuariosPageRoutingModule {}
