import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(private actionSheetController: ActionSheetController, private alertController: AlertController) {}

  async mostrarActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            console.log('Eliminar acción');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present();
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Este es un mensaje de alerta.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
