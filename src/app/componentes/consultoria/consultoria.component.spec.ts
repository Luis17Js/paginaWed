import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriaComponent } from './consultoria.component';

describe('ConsultoriaComponent', () => {
  let component: ConsultoriaComponent;
  let fixture: ComponentFixture<ConsultoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultoriaComponent]
    });
    fixture = TestBed.createComponent(ConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
