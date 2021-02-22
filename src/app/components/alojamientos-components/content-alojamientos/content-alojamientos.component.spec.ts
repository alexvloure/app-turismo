import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAlojamientosComponent } from './content-alojamientos.component';

describe('ContentAlojamientosComponent', () => {
  let component: ContentAlojamientosComponent;
  let fixture: ComponentFixture<ContentAlojamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAlojamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAlojamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
