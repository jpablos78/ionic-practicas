import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnviarMailPage } from './enviar-mail.page';

describe('EnviarMailPage', () => {
  let component: EnviarMailPage;
  let fixture: ComponentFixture<EnviarMailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarMailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnviarMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
