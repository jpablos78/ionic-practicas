import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MantenimientoPerfilAddPage } from './mantenimiento-perfil-add.page';

describe('MantenimientoPerfilAddPage', () => {
  let component: MantenimientoPerfilAddPage;
  let fixture: ComponentFixture<MantenimientoPerfilAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoPerfilAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MantenimientoPerfilAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
