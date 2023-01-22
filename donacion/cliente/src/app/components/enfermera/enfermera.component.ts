import { Component } from '@angular/core';
import { Enfermera } from 'src/app/models/enfermera';
import { EnfermeraService } from 'src/app/services/enfermera.service';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-enfermera',
  templateUrl: './enfermera.component.html',
  styleUrls: ['./enfermera.component.css']
})
export class EnfermeraComponent {
  enfermera:any;
  enfermeras = new Enfermera();
  constructor(private enfermeraService: EnfermeraService, private router: Router){
    this.listarEnfermeras();
   }
  listarEnfermeras()
  {
    this.enfermeraService.listEnfermera().subscribe((resCategorias: any) => {
      console.log(resCategorias);
      this.enfermera=resCategorias;
  },
      (err: any) => console.error(err)
    );
  }
  updateEnfermera()
  {
    console.log("enfermera");
  }
  visualizarEnfermera()
  {
    console.log("enfermera");
    
  }
  preparar(){
    $('#Mymodal').modal({
          dismissible: false
    });
    $('#Mymodal').modal('open');
  }
  static()
    {
      this.router.navigate(['enfermera']);
    }
}
