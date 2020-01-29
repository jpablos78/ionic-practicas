import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoUsuariosAddPage } from './mantenimiento-usuarios-add.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoUsuariosAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoUsuariosAddPageRoutingModule {}
