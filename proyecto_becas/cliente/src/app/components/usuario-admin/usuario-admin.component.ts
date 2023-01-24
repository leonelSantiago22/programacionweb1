import { Component } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service"; //es necesario esto para consumir servicios
import { Usuario } from "../../models/usuario";
import { Router } from "@angular/router";
@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario-admin.component.html',
  styleUrls: ['./usuario-admin.component.css']
})
export class UsuarioAdminComponent {
    
  listarUsuarios:any;
  constructor(private usuarioService: UsuariosService,private router:Router){
    this.listaUsuarios();
  }
  
  listaUsuarios(){
    this.usuarioService.list().subscribe((resUsuario: any) => {
      console.log(resUsuario);
    this.listarUsuarios = resUsuario;
    },
      (err: any) => console.error(err));

  }
  
  eliminarUsuarios(id: number) {
    this.usuarioService.eliminarUsuario(id) .subscribe(
      res => {
        {
          console.log(res);
          console.log("Usuario eliminado");
          this.listaUsuarios();
          

        }
      }, err => console.error(err));
  }
}
