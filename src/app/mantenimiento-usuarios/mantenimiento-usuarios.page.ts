import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mantenimiento-usuarios',
  templateUrl: './mantenimiento-usuarios.page.html',
  styleUrls: ['./mantenimiento-usuarios.page.scss'],
})
export class MantenimientoUsuariosPage implements OnInit {

  constructor(
    public router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  onClickBtnAdd() {
    console.log("onClick");
    this.router.navigate(['/mantenimiento-usuarios/1']);
  }

  async onClickBtnDelete() {
    console.log('delete');

    const alert = await this.alertController.create({
      header: 'Mensaje del Sistema',
      message: '<strong>Desea eliminar el registro ?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

  }
}
