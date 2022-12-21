import { Component } from '@angular/core';
//importamos el servicio
import { UsuarioService } from '../../services/services/usuario.service';
import { Usuario } from '../../models/usuario'; 

import Swal from "sweetalert2";
import { Route, Router } from "@angular/router";
@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent {
  constructor(private router: Router, private encargado:Encargado)
  {
    this.usuarioService
      .VerificarUsuario(this.usuario.correo, this.usuario.password).subscribe((resUsuario: any) => {

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
            this.router.navigate(['encargado']);
          }
        },
        (err: any) => console.error(err)
      );
  }
}
