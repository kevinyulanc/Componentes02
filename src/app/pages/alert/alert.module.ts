import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AlertPageRoutingModule } from './alert-routing.module';
import { AlertPage } from './alert.page';
import { ComponentsModule } from '../../components/components.module'; // Importar el módulo

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPageRoutingModule,
    ComponentsModule // Agregar el módulo de componentes aquí
  ],
  declarations: [AlertPage]
})
export class AlertPageModule {}
