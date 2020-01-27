import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoPerfilAddPageRoutingModule } from './mantenimiento-perfil-add-routing.module';

import { MantenimientoPerfilAddPage } from './mantenimiento-perfil-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenimientoPerfilAddPageRoutingModule
  ],
  declarations: [MantenimientoPerfilAddPage]
})
export class MantenimientoPerfilAddPageModule {}
