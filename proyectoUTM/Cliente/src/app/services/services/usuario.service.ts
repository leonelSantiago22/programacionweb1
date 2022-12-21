import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //peticiones http
import { environment } from '../../environments/environment'; //variables de entorno
import { Subscriber } from 'rxjs';
//variables globales

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //para poder accesar a los servicios http
  constructor(private http: HttpClient) { 
    
  }
  //informacion para verificar un usuario
  VerificarUsuario(correo:any, password:any) {
    let usuario = {
      'correo':correo,
      'password': password
    }
      return this.http.post(`${environment.API_URI}/api/usuario/verificarUsuario/${correo}/${password}`),usuario;
    }
  List()
  {
    return this.http.get(`${environment.API_URI}/api/usuario/List/`);
  }
}
