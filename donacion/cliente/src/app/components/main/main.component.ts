import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    constructor(private router: Router)
    {

    }
    changeSolicitud()
    {
      this.router.navigate(['solicitud']);
    }
    changeBolsadeSangre()
    {
      this.router.navigate(['bolsa_de_sangre']);
    }
    changePaciente()
    {
      this.router.navigate(['paciente']);
    }
    changeDonadores()
    {
      this.router.navigate(['donadores']);
    }
}