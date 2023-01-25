export class Usuario {
    idusuario?:number;
    idRelacional?:number;
    correo:string;
    password:string;
    tipo:number;

    constructor() {
        this.correo = '';
        this.password = '';
        this.tipo=0;
    }
}