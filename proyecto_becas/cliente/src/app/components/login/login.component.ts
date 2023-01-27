import { Component } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service"; //es necesario esto para consumir servicios
import { Usuario } from "../../models/usuario";
import { Router } from "@angular/router";
import Swal from "sweetalert2";//para lanzar alertas
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = new Usuario();
  constructor(private usuariosService: UsuariosService,private router:Router) { }//ocupar el servicio mediante esta variable
  
  verificarUsuario() {
    //console.log("entrando a verificar usuario");
    //console.log(this.usuario);
    //el servicio hace de puente entre el cliente y el servidor 
    this.usuariosService.validar(this.usuario.correo, this.usuario.password).subscribe((resUsuario: any) => {
   
      this.usuario = resUsuario;
      if (resUsuario == null ) {
      console.log("el usuario no existe ");
      Swal.fire({
        position :"center",
        icon:"error",
        title : "Correo o contraseña incorrecta",
        showConfirmButton:true
     });
      }else{

        if(resUsuario.tipo==1){
          console.log("el usuario es administrador ");
          this.router.navigate(['usuarios']);
        }else{
          console.log("el usuario si existe ");
          //guardar la variable de entorno 
          console.log(resUsuario.tipo);
          console.log(resUsuario.idusuario);
          localStorage.setItem("idUsuario", resUsuario.idusuario + " "); //guardar el id del alumno 


          this.router.navigate(['home']);
           //se concatena con cadena vacia para que se vuelva cadena

        }
       
      }
    },
      err => console.error(err));
  }


}
