import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametrosFePage } from './parametros-fe.page';

const routes: Routes = [
  {
    path: '',
    component: ParametrosFePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosFePageRoutingModule {}
