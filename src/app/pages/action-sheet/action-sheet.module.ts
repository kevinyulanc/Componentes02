import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ActionSheetPageRoutingModule } from './action-sheet-routing.module';
import { ActionSheetPage } from './action-sheet.page';
import { ComponentsModule } from '../../components/components.module'; // Importar el módulo

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetPageRoutingModule,
    ComponentsModule // Agregar el módulo de componentes aquí
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}
