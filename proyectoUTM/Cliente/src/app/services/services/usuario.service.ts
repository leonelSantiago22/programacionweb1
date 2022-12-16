import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //peticiones http
import { environment } from '../../environments/environment'; //variables de entorno
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
    return this.http
    .get(`${environment.API_URI}/api/usuario/verificarUsuario/${correo}/${password}`);
    }

}
