import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParametrosFePage } from './parametros-fe.page';

describe('ParametrosFePage', () => {
  let component: ParametrosFePage;
  let fixture: ComponentFixture<ParametrosFePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosFePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParametrosFePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
