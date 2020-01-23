import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametrosFePageRoutingModule } from './parametros-fe-routing.module';

import { ParametrosFePage } from './parametros-fe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametrosFePageRoutingModule
  ],
  declarations: [ParametrosFePage]
})
export class ParametrosFePageModule {}
