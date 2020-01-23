import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoUsuariosPage } from './mantenimiento-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoUsuariosPageRoutingModule {}
