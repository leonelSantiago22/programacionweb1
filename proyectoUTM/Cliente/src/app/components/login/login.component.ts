import { Component } from '@angular/core';
//importamos el servicio
import { UsuarioService } from '../../services/services/usuario.service';
import { Usuario } from '../../models/usuario';
import Swal from "sweetalert2";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //creamos la varible
  usuario = new Usuario();
  constructor(private usuarioService: UsuarioService, private router: Router) {}
  verificarUsuario() {
    this.usuarioService.VerificarUsuario(this.usuario.correo, this.usuario.password).subscribe((resUsuario: any) => {

          console.log(resUsuario);
          if( resUsuario == null)
          {
            console.log(" el usuario no exite");
            Swal.fire({
              position:"center",
              icon:"error",
              title: "Correo o contrasena incorrecta",
              showConfirmButton: true
            });
          }else{
            console.log("El usuario existe"); 

          }
        },
        (err: any) => console.error(err)
      );
  }
  list()
  {

  }
}
