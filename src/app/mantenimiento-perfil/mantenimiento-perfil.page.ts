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
    this.router.navigate(['/mantenimiento-perfil-add']);
  }
}
