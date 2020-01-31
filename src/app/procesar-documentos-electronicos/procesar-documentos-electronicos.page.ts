import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-procesar-documentos-electronicos',
  templateUrl: './procesar-documentos-electronicos.page.html',
  styleUrls: ['./procesar-documentos-electronicos.page.scss'],
})
export class ProcesarDocumentosElectronicosPage implements OnInit {

  constructor(
    public router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  onClickBtnMail() {
    console.log("onClick");
    this.router.navigate(['/procesar-documentos-electronicos/1']);
  }

  onClickBtnPdf() {
    this.presentLoading();
  }

  onClickBtnProcesar() {
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
}
