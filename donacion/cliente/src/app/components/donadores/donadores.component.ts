import { Component } from '@angular/core';
import { DonadorService } from 'src/app/services/donador.service';
import { Donador } from 'src/app/models/donador';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any
@Component({
  selector: 'app-donadores',
  templateUrl: './donadores.component.html',
  styleUrls: ['./donadores.component.css']
})
export class DonadoresComponent {
  donador : any;
  donadores = new Donador();
  personas = new Persona();
  constructor(private  donadorService: DonadorService, private personaService: PersonaService,private router: Router){
    this.donadorService.listarDonadores().subscribe((resCategorias: any) => {
      this.donador=resCategorias;
  },
      (err: any) => console.error(err)
    );
    
  }
  
  eliminarDonador(iddonador:any){
    console.log("eliminar categoria "+iddonador)
    this.donadorService.deleteDonadores(iddonador).subscribe((resCategorias: any) => {
      console.log(resCategorias);
      this.donadorService.listarDonadores().subscribe((resCategorias: any) => {
        console.log(resCategorias);
        this.donador=resCategorias
    },
        (err: any) => console.error(err)
      );
  },
      (err: any) => console.error(err)
    );
  }
  visualizarDonador(iddonador:any, idpaciente:any)
  {
    this.donadorService.listOne(iddonador, idpaciente).subscribe((resClientes: any) => {
      console.log(resClientes);
      this.donadores=resClientes;
      this.personas = resClientes;
  },
      (err: any) => console.error(err)
    );
  }
  agregarDonador()
  {
      //primero insertamos a la persona
      this.personaService.agregarPersona(this.personas).subscribe((resPaciente: any) => {
        console.log(resPaciente);
        this.personas = resPaciente;
      },
    (err: any) => console.error(err)
    );
    this.personaService.listPersonaMax().subscribe((resCategorias: any) => {
      console.log(resCategorias); 
      this.donadores = resCategorias;
      
    },
      (err: any) => console.error(err)
    );
    /*
    this.donadorService.insertarDonador(this.donadores).subscribe((resPaciente: any) => {
      console.log(resPaciente);
      this.donador = resPaciente;
  },
      (err: any) => console.error(err)
    );
    */
  }

  listOnePaciente(idpaciente:any, idpersona:any)
  {
    this.donadorService.listOne(idpaciente,idpersona).subscribe((resClientes: any) => {
      console.log(resClientes);
      this.donador=resClientes;
  },
      (err: any) => console.error(err)
    );
  }
  actualizarDonador()
  {
    this.donadorService.updateDonadores(this.donadores).subscribe((resPaciente: any) => {
      console.log(resPaciente);
      this.donadores = resPaciente;
  },
      (err: any) => console.error(err)
    );
  }
  clear()
  {
    console.log("clear");
    this.donadores.nombre = "";
  } 
  changePaciente()
    {
      this.router.navigate(['paciente']);
    }
  changeSolicitud()
    {
      this.router.navigate(['solicitud']);
    }
}
