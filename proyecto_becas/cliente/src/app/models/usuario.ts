export class Usuario {
    idusuario?:number;
    correo:string;
    password:string;
    tipo:number; //especificamos si es un tipo administrador 
    // o en su defecto un alumno

    constructor() {
        this.correo = '';
        this.password = '';
        this.tipo=0;
    }
}