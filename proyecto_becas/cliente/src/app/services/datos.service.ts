import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Datospersonales } from '../models/datos_personales';

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

    //ingresar un usuario
    IngresarDatosPersonales(alumno:Datospersonales){
      return this.http.post(`${environment.API_URI}/api/datos/`,alumno);
    }

        //ingresar un usuario
    ModificarDatosPersonales(alumno:Datospersonales){
          return this.http.put(`${environment.API_URI}/api/datos/`,alumno.matricula);
    }

}
