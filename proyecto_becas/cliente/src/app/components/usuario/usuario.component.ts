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
  edit: boolean = false;
  
  constructor(private usuarioService: UsuariosService, private router:Router,private activatedRoute: ActivatedRoute){}
  usuario1 = new Usuario();
  

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    //si hay un parametro y es un id  entonces es el metodo de modificar 
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

  

  agregarp(){
    delete this.usuario1.idusuario;
    
    this.usuarioService.IngresarUsuario(this.usuario1).subscribe((resUsuario: any)=> {
      console.log(resUsuario);
     
      console.log("Usuario ingresado con exito");
   }, err => console.error(err) );


 
  }

  modificar(){

    this.usuarioService.modificarUsuario(this.usuario1).subscribe(
      res => {
        console.log("paciente modificado con exito");
        //this.router.navigate(['modificarapnp',this.paciente1.id_paciente]);
       }, err => console.error(err));
  }
}
