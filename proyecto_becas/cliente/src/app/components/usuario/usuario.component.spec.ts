import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioComponent } from './usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(async () => {
    //ya no le muevas voy a regresar a una version que funcione va
    
    await TestBed.configureTestingModule({
      declarations: [ UsuarioComponent ],
      imports: [HttpClientTestingModule,
        RouterTestingModule],
      providers:[UsuariosService
  
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
