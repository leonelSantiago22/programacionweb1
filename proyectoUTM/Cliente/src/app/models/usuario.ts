export class Usuario{
    id: number;
    nombre: string;
    tipo: number;
    password: string;
    correo: string;
    //carmagos el servicio directamente en este modelo de datos 
    constructor() {
    this.id = 0;
    this.nombre = "";
    this.tipo = 0;
    this.correo = 'hola@gs';
    this.password = '';
    }
}