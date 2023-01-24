export class Usuario {
    matricula?:number;
    correo?:string;
    grupo_actual?:string;
    fechadenacimiento?: string;
    

    constructor() 
    {
      this.grupo_actual = '';
    }
}