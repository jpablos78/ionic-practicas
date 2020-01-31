import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesarDocumentosElectronicosPage } from './procesar-documentos-electronicos.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesarDocumentosElectronicosPage
  },
  {
    path: 'enviar-mail',
    loadChildren: () => import('./enviar-mail/enviar-mail.module').then( m => m.EnviarMailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesarDocumentosElectronicosPageRoutingModule {}
