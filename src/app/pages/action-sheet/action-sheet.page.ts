import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  // Método para mostrar el Action Sheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash-outline',
          handler: () => {
            console.log('Eliminar clicado');
          },
        },
        {
          text: 'Compartir',
          icon: 'share-outline',
          handler: () => {
            console.log('Compartir clicado');
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close-outline',
        },
      ],
    });
    await actionSheet.present();
  }

  // Conectar el método con el botón
  onClick() {
    this.presentActionSheet();
  }
}
