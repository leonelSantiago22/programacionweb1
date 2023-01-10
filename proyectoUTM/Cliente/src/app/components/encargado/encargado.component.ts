import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent {
  usuarios : any;
  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.list().subscribe((resUsuario: any) => {
      console.log(resUsuario);
      this.usuarios = resUsuario;
},
      (err: any) => console.error(err)
    );
  }
  }
  