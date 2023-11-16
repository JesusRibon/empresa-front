import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCamionComponent } from './registro-camion.component';

describe('RegistroCamionComponent', () => {
  let component: RegistroCamionComponent;
  let fixture: ComponentFixture<RegistroCamionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroCamionComponent]
    });
    fixture = TestBed.createComponent(RegistroCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
