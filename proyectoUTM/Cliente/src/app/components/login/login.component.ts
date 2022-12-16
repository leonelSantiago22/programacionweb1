import { Component } from '@angular/core';
//importamos el servicio
import {UsuarioService} from '../../services/services/usuario.service';
import {Usuario} from "../../models/usuario";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //creamos la varible
  usuario  = new Usuario();
  constructor(private usuarioService:UsuarioService)
  {
    
  }
  verificarUsuario()
  {
    console.log("entrando a verificar usuario");
    console.log(this.usuario, "probando el usuario");
    
  }
}
