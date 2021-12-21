import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFuncionalidadComponent } from './crear-funcionalidad.component';

describe('CrearFuncionalidadComponent', () => {
  let component: CrearFuncionalidadComponent;
  let fixture: ComponentFixture<CrearFuncionalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFuncionalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFuncionalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
