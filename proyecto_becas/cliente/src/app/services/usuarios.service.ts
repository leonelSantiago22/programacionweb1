import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  validar(correo:any, password:any){
    let usuario = {
      'correo':correo,
      'password':password
    }
    console.log(`${environment.API_URI}/api/usuarios/verificar`)
    return this.http.post(`${environment.API_URI}/api/usuarios/verificar/`,usuario);
  }
  list(){
    return this.http.get(`${environment.API_URI}/api/usuarios/`);
  }
  
  //obtener un solo usuario
  obtenerUnUsuario(id:number){
    return this.http.get(`${environment.API_URI}/api/usuarios/${id}`);
  }
  //ingresar un usuario
  IngresarUsuario(usuario:Usuario){
    return this.http.post(`${environment.API_URI}/api/usuarios/`,usuario);
  }
  //elimina un usuario
  eliminarUsuario(id:number){
    return this.http.delete(`${environment.API_URI}/api/usuarios/delete/${id}`);
  }
  //modifica un usuario 
  modificarUsuario(usuario:Usuario){
    return this.http.put(`${environment.API_URI}/api/usuarios/update/${usuario.idUsuario}`,usuario);
  }

}
