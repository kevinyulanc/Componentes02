import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {
  constructor(private alertCtrl: AlertController) {}

  // Alerta simple
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'Esta es una alerta simple.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Alerta con múltiples botones
  async presentAlertMultilpeButton() {
    const alert = await this.alertCtrl.create({
      header: 'Opciones',
      buttons: ['Cancelar', 'Abrir Modal', 'Eliminar'],
    });
    await alert.present();
  }

  // Alerta con acciones personalizadas
  async presentAlertMultilpeButtonAction() {
    const alert = await this.alertCtrl.create({
      header: 'Acciones',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Clic en Aceptar');
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Clic en Cancelar');
          },
        },
      ],
    });
    await alert.present();
  }
}
