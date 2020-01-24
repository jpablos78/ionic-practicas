import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  public form = [
    {
      val: 'Mantemimiento de Usuarios',
      isChecked: true
    },
    {
      val: 'Cambio de Clave',
      isChecked: true
    },
    {
      val: 'Favoritos',
      isChecked: true
    },
    {
      val: 'Mantenimiento de Perfil',
      isChecked: true
    },
    {
      val: 'Permisos',
      isChecked: true
    },
    {
      val: 'Ambiente',
      isChecked: true
    },
    {
      val: 'Parametros FE',
      isChecked: true
    },
    {
      val: 'Procesar Dctos Electronicos',
      isChecked: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
