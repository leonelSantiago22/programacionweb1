import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }
  listporIdusuario(idusuario:number)
  {
    //deja este
    //es un especial, que lista por id, no por matricula
    return this.http.get(`${environment.API_URI}/api/datos/listid/`+idusuario);
  }
  listOne(matricula:number)
  {
    return this.http.get(`${environment.API_URI}/api/datos/`+matricula);
  }
}
