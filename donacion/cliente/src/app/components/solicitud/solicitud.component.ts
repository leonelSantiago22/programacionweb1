import { Component } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  solicitud:any;
  constructor(private solicitudService :SolicitudService)
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
  
      this.solicitud.listPacientes().subscribe((resCategorias: any) => {
        console.log(resCategorias);
        this.solicitud=resCategorias;
    },
        (err: any) => console.error(err)
      );
  },
      (err: any) => console.error(err)
    );
  }
}
