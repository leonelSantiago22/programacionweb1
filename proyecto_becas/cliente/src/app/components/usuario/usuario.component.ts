import { Component, OnInit  } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from 'src/app/models/usuario';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  listarUsuarios:any;
  edit: boolean = false;
  
  constructor(private usuarioService: UsuariosService, private router:Router,private activatedRoute: ActivatedRoute){ this.listaUsuarios() }
  usuario1 = new Usuario();
  

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    //si hay un parametro y es un id  entonces el metodo que se realizara es el de modificar  
    if (params['id']) {
      this.usuarioService.obtenerUnUsuario(params['id'])
        .subscribe((res: any) => {
            console.log(res);
            this.usuario1= res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  
  //funcion para agregar nuevo usuario 
  agregaru(){
    delete this.usuario1.idusuario;
    
    this.usuarioService.IngresarUsuario(this.usuario1).subscribe((resUsuario: any)=> {
      console.log(resUsuario);
     
      console.log("Usuario ingresado con exito");
   }, err => console.error(err) );


 
  }

  modificaru(){

    this.usuarioService.modificarUsuario(this.usuario1).subscribe(
      res => {
        console.log("paciente modificado con exito");
        
       }, err => console.error(err));
  }

  listaUsuarios(){
    this.usuarioService.list().subscribe((resUsuario: any) => {
      console.log(resUsuario);
    this.listarUsuarios = resUsuario;
    },
      (err: any) => console.error(err));

  }
}
