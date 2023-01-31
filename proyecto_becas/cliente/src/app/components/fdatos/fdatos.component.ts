
import { Component, OnInit  } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Datospersonales } from 'src/app/models/datos_personales';
import Swal from "sweetalert2";//para lanzar alertas
@Component({
  selector: 'app-fdatos',
  templateUrl: './fdatos.component.html',
  styleUrls: ['./fdatos.component.css']
})
export class FdatosComponent {

  edit: boolean = false;
  constructor(private router:Router,private datosServices: DatosService,private activatedRoute: ActivatedRoute) {}

  ngOnit(){
    this.obtenerUnDatopersonal();
    
  }
  
   datospersonalesAlumno = new Datospersonales();

   obtenerUnDatopersonal(){
    const params = this.activatedRoute.snapshot.params;
  
    if (params['id']) {
      this.datosServices.listporIdusuario(params['id'])
        .subscribe((res: any) => {
            console.log(res);
            this.datospersonalesAlumno= res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
   }
  
  ingresarDatosAlumno(){
    delete this.datospersonalesAlumno.idusuario;
    this.datosServices.IngresarDatosPersonales(this.datospersonalesAlumno).subscribe((resDatos: any)=> {
      console.log(resDatos);
     
      console.log("Datos Personales ingresados con exito ");
      Swal.fire({
        position :"center",
        icon:"success",
        title : "Datos personales ingresados con exito",
        showConfirmButton:true
     });
   }, err => console.error(err) );

  }

  modificaru(){

    this.datosServices.ModificarDatosPersonales(this.datospersonalesAlumno).subscribe(
      res => {
        console.log("datos modificado con exito");
        Swal.fire({
          position :"center",
          icon:"success",
          title : "Informacion modificada con exito",
          showConfirmButton:true
       });
        
       }, err => console.error(err));
  }






}
