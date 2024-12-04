import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent], // Declarar el componente
  exports: [HeaderComponent],     // Exponerlo para usarlo en otros módulos
  imports: [CommonModule, IonicModule] // Importar módulos necesarios
})
export class ComponentsModule {}
