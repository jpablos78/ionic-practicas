import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoPerfilPageRoutingModule } from './mantenimiento-perfil-routing.module';

import { MantenimientoPerfilPage } from './mantenimiento-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenimientoPerfilPageRoutingModule
  ],
  declarations: [MantenimientoPerfilPage]
})
export class MantenimientoPerfilPageModule {}
