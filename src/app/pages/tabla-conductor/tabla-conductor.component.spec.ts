import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConductorComponent } from './tabla-conductor.component';

describe('TablaConductorComponent', () => {
  let component: TablaConductorComponent;
  let fixture: ComponentFixture<TablaConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaConductorComponent]
    });
    fixture = TestBed.createComponent(TablaConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
