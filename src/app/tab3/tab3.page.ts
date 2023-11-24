import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  constructor(private alertController: AlertController, private router: Router) {}

  async mostrarConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas ir a este enlace?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          },
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Redireccionando...');
            // Redirige al enlace deseado
            window.open('https://drive.google.com/file/d/1TDO6Vc2Vb_2j-BSGbxz7dWYlzz0ypCRU/view?usp=sharing', '_system');          },
        },
      ],
    });

    await alert.present();
  }

}
