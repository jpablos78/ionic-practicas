import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mantenimiento-usuarios-add',
  templateUrl: './mantenimiento-usuarios-add.page.html',
  styleUrls: ['./mantenimiento-usuarios-add.page.scss'],
})
export class MantenimientoUsuariosAddPage implements OnInit {
  checked: boolean = false;
  constructor(

  ) { }

  ngOnInit() {
  }

  onChangeToggle(event) {
    console.log('cambio toggle', event.detail);
    this.checked = event.detail.checked;
  }
}
