import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FempleadosComponent } from './fempleados.component';

describe('FempleadosComponent', () => {
  let component: FempleadosComponent;
  let fixture: ComponentFixture<FempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FempleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
