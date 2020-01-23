import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate =
      [
        {
          title: "Mantenimiento de Usuarios",
          url: "/mantenimiento-usuarios",
          icon: "person"
        },
        {
          title: "Cambio de Clave",
          url: "/cambio-clave",
          icon: "unlock"
        },
        {
          title: "Favoritos",
          url: "/favoritos",
          icon: "star"
        },
        {
          title: "Manteminiento de Perfil",
          url: "/mantenimiento-perfil",
          icon: "card"
        },
        {
          title: "Permisos",
          url: "/permisos",
          icon: "contacts"
        },
        {
          title: "Ambiente",
          url: "/ambiente",
          icon: "clipboard"
        },
        {
          title: "Parametros FE",
          url: "/parametros-fe",
          icon: "grid"
        },
        {
          title: "Procesar Dctos Electronicos",
          url: "/procesar-documentos-electronicos",
          icon: "cog"
        }
      ]
  }
}
