import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcesarDocumentosElectronicosPage } from './procesar-documentos-electronicos.page';

describe('ProcesarDocumentosElectronicosPage', () => {
  let component: ProcesarDocumentosElectronicosPage;
  let fixture: ComponentFixture<ProcesarDocumentosElectronicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesarDocumentosElectronicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcesarDocumentosElectronicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
