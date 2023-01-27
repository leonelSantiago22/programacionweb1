export class Datospersonales {
    matricula?:number;
    grupo_actual?:string;
    fechadenacimiento?: string;
    sexo?:string;
    estado_civil?:string;
    enfermedad?: number;
    tipo_enfermedad?:string;
    lengua_indigena?:string;
    dependencia_economica?:number;
    beca_alimentaria?:string;
    numero_familiares?:number;
    parentesco?:string;
    automovil?:string;
    idusuario?:number;
    nombre?:string;
    constructor() 
    {
      this.grupo_actual = '';
    }
}