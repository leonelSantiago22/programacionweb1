import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  listarDatos()
  {
    return this.http.get(`${environment.API_URI}/api/datos`);
  }
  //nos ayuda tambien para verificar
  listarDatoporusuario(matricula:any){
    return this.http.get(`${environment.API_URI}/api/datos/`+matricula);
  }

}
