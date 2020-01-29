import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-mantenimiento-perfil',
  templateUrl: './mantenimiento-perfil.page.html',
  styleUrls: ['./mantenimiento-perfil.page.scss'],
})
export class MantenimientoPerfilPage implements OnInit {

  constructor(
    public router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  onClickBtnAdd() {
    console.log("onClick");
    this.router.navigate(['/mantenimiento-perfil-add']);
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

  onClickList() {
    console.log("onClickList");
  }

  onPress($event) {
    console.log("onPress", $event);
    //this.pressState = 'pressing';
    //this.startInterval();
  }

  onPressUp($event) {
    console.log("onPressUp", $event);
    //this.pressState = 'released';
    //this.stopInterval();
    this.router.navigate(['/mantenimiento-perfil-add']);

  }
}
