import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdatosComponent } from './fdatos.component';

describe('FdatosComponent', () => {
  let component: FdatosComponent;
  let fixture: ComponentFixture<FdatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
