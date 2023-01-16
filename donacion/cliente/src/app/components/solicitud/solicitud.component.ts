import { Component } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/models/solicitud';
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  solicitud:any;
  solicitudes = new Solicitud();
  constructor(private solicitudService :SolicitudService,private router: Router)
  {
    this.listarSolicitudes();
  }
  listarSolicitudes()
  {
    this.solicitudService.listSolicitudes().subscribe((resCategorias: any) => {
      console.log(resCategorias);
      this.solicitud=resCategorias;
  },
      (err: any) => console.error(err)
    );
  }

  eliminarSolicitud(idsolicitud:any){
    this.solicitudService.deleteSolicitud(idsolicitud).subscribe((resCategorias: any) => {
      console.log(resCategorias);
      console.log(this.solicitud);
      this.listarSolicitudes();
  },
      (err: any) => console.error(err)
    );
  }

  changeDonadores()
  {
    this.router.navigate(['donadores']);
  }
  changePaciente()
    {
      this.router.navigate(['paciente']);
    }
  agregarSolicitud()
  {
    this.solicitudService.agregarSolicitud(this.solicitudes).subscribe((resSolcitud: any) => {
      console.log(resSolcitud);
      this.solicitud = resSolcitud;
      this.listarSolicitudes();
  },
      (err: any) => console.error(err)
    );
  }
  visualizarSolicitud(idsolicitud:any)
  {
    console.log(idsolicitud);
    
    this.solicitudService.listOne(idsolicitud).subscribe((resClientes: any) => {
      console.log(resClientes);
      this.solicitudes=resClientes;
  },
      (err: any) => console.error(err)
    );
  }
}
