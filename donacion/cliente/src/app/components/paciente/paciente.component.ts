import { Component } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  paciente :any;
  constructor(private pacienteService: PacienteService){
    this.pacienteService.listPacientes().subscribe((resCategorias: any) => {
      console.log(resCategorias);
      this.paciente=resCategorias
  },
      (err: any) => console.error(err)
    );
  }
  eliminarPaciente(idpaciente:any){
    this.pacienteService.deletePacientes(idpaciente).subscribe((resCategorias: any) => {
      console.log(resCategorias);
      console.log(idpaciente);
  
      this.pacienteService.listPacientes().subscribe((resCategorias: any) => {
        console.log(resCategorias);
        this.paciente=resCategorias
    },
        (err: any) => console.error(err)
      );
  },
      (err: any) => console.error(err)
    );
  }

}
