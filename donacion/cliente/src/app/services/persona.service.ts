import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //peticiones http
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }
  agregarPersona(persona:any)
  {
    return this.http.post(`${environment.API_URI}/api/persona/`,persona);
  }
  listPersonaMax()
  {
    return this.http.get(`${environment.API_URI}/api/persona/max`);
  }
}
