import { Component } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
//importamos el servicio
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from "../../models/usuario";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //creamos la varible
  usuario = new Usuario();
  constructor(private usuarioService: UsuarioService, private router: Router) {

  }
  verificarUsuario() {

    this.usuarioService.VerificarUsuario(this.usuario.correo, this.usuario.password).subscribe((resUsuario: any) => {
      console.log(resUsuario);
    if (resUsuario == null){
      console.log("el usuario no existe")
      Swal.fire({
        position:"center",
        icon:"error",
        title:"correo o contraseña inválido",
        showConfirmButton:true
      })
    }else{
      console.log("el usuario existe");
      this.router.navigate(['encargado'])
    }
},
      (err: any) => console.error(err)
    );
  }
}