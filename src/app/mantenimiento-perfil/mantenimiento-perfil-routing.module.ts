import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoPerfilPage } from './mantenimiento-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoPerfilPageRoutingModule {}
