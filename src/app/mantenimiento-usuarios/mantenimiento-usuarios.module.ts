import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoUsuariosPageRoutingModule } from './mantenimiento-usuarios-routing.module';

import { MantenimientoUsuariosPage } from './mantenimiento-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenimientoUsuariosPageRoutingModule
  ],
  declarations: [MantenimientoUsuariosPage]
})
export class MantenimientoUsuariosPageModule {}
