import { Component } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service"; //es necesario esto para consumir servicios
import { Usuario } from "../../models/usuario";
import { Router } from "@angular/router";
import { Datospersonales } from 'src/app/models/datos_personales';
import { DatosService } from 'src/app/services/datos.service';
@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario-admin.component.html',
  styleUrls: ['./usuario-admin.component.css']
})
export class UsuarioAdminComponent {
  
  listarUsuarios:any;
  datos :any;
  constructor(private usuarioService: UsuariosService,private router:Router, private datosService :DatosService){
    this.listaUsuarios();
  }
  ngOnInit()
  {
    this.datos = new Datospersonales();
  }
  listaUsuarios(){
    this.usuarioService.list().subscribe((resUsuario: any) => {
      console.log(resUsuario);
    this.listarUsuarios = resUsuario;
    },
      (err: any) => console.error(err));

  }

  listarDatos(idusuario:number){
    this.datosService.listporIdusuario(idusuario).subscribe((resUsuario: any) => {
      console.log(resUsuario);
      this.datos = resUsuario;
    this.datos = resUsuario;
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
