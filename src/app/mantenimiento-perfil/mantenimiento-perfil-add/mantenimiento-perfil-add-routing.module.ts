import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoPerfilAddPage } from './mantenimiento-perfil-add.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoPerfilAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoPerfilAddPageRoutingModule {}
