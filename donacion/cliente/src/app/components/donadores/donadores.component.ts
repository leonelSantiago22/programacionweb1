import { Component } from '@angular/core';
import { DonadorService } from 'src/app/services/donador.service';
@Component({
  selector: 'app-donadores',
  templateUrl: './donadores.component.html',
  styleUrls: ['./donadores.component.css']
})
export class DonadoresComponent {
  donador : any;
  constructor(private  donadorService: DonadorService){
    this.donadorService.listarDonadores().subscribe((resCategorias: any) => {
      console.log(resCategorias);
      this.donador=resCategorias
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
}
