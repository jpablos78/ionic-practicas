import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviarMailPage } from './enviar-mail.page';

const routes: Routes = [
  {
    path: '',
    component: EnviarMailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviarMailPageRoutingModule {}
