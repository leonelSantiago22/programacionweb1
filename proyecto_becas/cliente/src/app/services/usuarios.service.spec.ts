import { TestBed } from '@angular/core/testing';

import { UsuariosService } from './usuarios.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../environments/environment';

describe('UsuariosService', () => {
  let service: UsuariosService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //asegurarse de que llege ala API deseada  
      imports:[
         HttpClientTestingModule
        ]

    });
    service = TestBed.inject(UsuariosService);
    httpMock= TestBed.inject(HttpTestingController)
  });

  afterEach( () => {//pila de peticiones, despues de cada prueba se verifica si quedo una peticion pendiente 
    httpMock.verify();
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //prueba para verificar si se esta trayendo la informacion 

  it('deberia de retornar a un usuario ',() => {

    const expectedResponse = {
      "idusuario" :1, 
      "correo": "asds@gmail.com",
      "password":"2343434",
      "tipo": 2
    }

    const responseObject={

    }

    service.obtenerUnUsuario(1).subscribe( res => {
      console.log(res);
    });
    
     const req =httpMock.expectOne(`${environment.API_URI}/api/usuarios/${1}`)
 
     req.flush(responseObject)
  })

});
