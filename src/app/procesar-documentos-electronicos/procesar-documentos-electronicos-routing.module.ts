import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesarDocumentosElectronicosPage } from './procesar-documentos-electronicos.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesarDocumentosElectronicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesarDocumentosElectronicosPageRoutingModule {}
