import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorDestinosComponent } from './buscador-destinos.component';

describe('BuscadorDestinosComponent', () => {
  let component: BuscadorDestinosComponent;
  let fixture: ComponentFixture<BuscadorDestinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorDestinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
