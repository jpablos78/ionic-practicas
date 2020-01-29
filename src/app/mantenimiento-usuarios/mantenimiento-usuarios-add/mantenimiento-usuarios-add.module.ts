import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoUsuariosAddPageRoutingModule } from './mantenimiento-usuarios-add-routing.module';

import { MantenimientoUsuariosAddPage } from './mantenimiento-usuarios-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenimientoUsuariosAddPageRoutingModule
  ],
  declarations: [MantenimientoUsuariosAddPage]
})
export class MantenimientoUsuariosAddPageModule {}
