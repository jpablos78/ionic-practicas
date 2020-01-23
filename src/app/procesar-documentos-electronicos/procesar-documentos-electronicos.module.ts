import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesarDocumentosElectronicosPageRoutingModule } from './procesar-documentos-electronicos-routing.module';

import { ProcesarDocumentosElectronicosPage } from './procesar-documentos-electronicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesarDocumentosElectronicosPageRoutingModule
  ],
  declarations: [ProcesarDocumentosElectronicosPage]
})
export class ProcesarDocumentosElectronicosPageModule {}
