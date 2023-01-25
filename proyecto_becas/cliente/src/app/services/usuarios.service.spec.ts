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
      
        "idusuario": 3,
        "correo": "motomami.com",
        "password": "12345",
        "tipo": 1
    
    }

    const responseObject={
      
      "idusuario": 3,
      "correo": "motomami.com",
      "password": "12345",
      "tipo": 1
    

    }

    service.obtenerUnUsuario(3).subscribe( res => {
      console.log(res);
      expect(res).toEqual(expectedResponse);
    });
    
     const req =httpMock.expectOne(`${environment.API_URI}/api/usuarios/${3}`)
 
     req.flush(responseObject)
  })

});
