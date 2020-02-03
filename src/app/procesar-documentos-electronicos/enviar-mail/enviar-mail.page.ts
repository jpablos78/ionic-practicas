import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-enviar-mail',
  templateUrl: './enviar-mail.page.html',
  styleUrls: ['./enviar-mail.page.scss'],
})
export class EnviarMailPage implements OnInit {

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }
  onClickBtnAgregarMail() {
    this.presentAlertPrompt();
  }

  onClickBtnEnviarMail() {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Procesando ...',
      spinner: 'bubbles',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Ingrese el nombre'
        },
        {
          name: 'name2',
          type: 'email',
          id: 'name2-id',
          placeholder: 'Ingrese el correo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
