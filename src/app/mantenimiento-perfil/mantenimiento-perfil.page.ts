import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento-perfil',
  templateUrl: './mantenimiento-perfil.page.html',
  styleUrls: ['./mantenimiento-perfil.page.scss'],
})
export class MantenimientoPerfilPage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  onClickBtnAdd() {
    console.log("onClick");
    this.router.navigate(['/mantenimiento-perfil-add']);
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
