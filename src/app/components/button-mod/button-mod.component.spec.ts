import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModComponent } from './button-mod.component';

describe('ButtonModComponent', () => {
  let component: ButtonModComponent;
  let fixture: ComponentFixture<ButtonModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
