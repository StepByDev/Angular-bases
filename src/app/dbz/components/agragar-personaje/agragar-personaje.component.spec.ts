import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgragarPersonajeComponent } from './agragar-personaje.component';

describe('AgragarPersonajeComponent', () => {
  let component: AgragarPersonajeComponent;
  let fixture: ComponentFixture<AgragarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgragarPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgragarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
