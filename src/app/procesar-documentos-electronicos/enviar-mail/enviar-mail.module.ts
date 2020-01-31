import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviarMailPageRoutingModule } from './enviar-mail-routing.module';

import { EnviarMailPage } from './enviar-mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviarMailPageRoutingModule
  ],
  declarations: [EnviarMailPage]
})
export class EnviarMailPageModule {}
