import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MantenimientoUsuariosAddPage } from './mantenimiento-usuarios-add.page';

describe('MantenimientoUsuariosAddPage', () => {
  let component: MantenimientoUsuariosAddPage;
  let fixture: ComponentFixture<MantenimientoUsuariosAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoUsuariosAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MantenimientoUsuariosAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
