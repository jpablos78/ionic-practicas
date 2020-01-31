import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ButtonModule } from 'primeng/button';
import {TreeModule} from 'primeng/tree';

import { PermisosPageRoutingModule } from './permisos-routing.module';

import { PermisosPage } from './permisos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermisosPageRoutingModule,
    ButtonModule,
    TreeModule
  ],
  declarations: [PermisosPage]
})
export class PermisosPageModule { }
