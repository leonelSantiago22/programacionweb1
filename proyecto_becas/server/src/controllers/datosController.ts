import { Request, Response } from "express";
import pool from "../database";

class DatosController {
    public async list(req: Request, res: Response) {
        console.log(req.params);
        const consulta = 'SELECT * FROM datos_personales_alumno';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async create(req: Request, res: Response ): Promise<void>
    {
        console.log(req);
        const resp = await pool.query("INSERT INTO datos_personales_alumno set ?", [req.body]); //recibira los parametros por el body
        res.json(resp);   
    }
    public async delete(req: Request, res: Response): Promise<void>    
    {
        const { matricul } = req.params;
        const resp = await pool.query(`DELETE FROM datos_personales_alumno WHERE matricula = ${matricul}`);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { matricul } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE datos_personales_alumno set ? WHERE matricula = ?", [req.body, matricul]);
        res.json(resp);
    }
    public async read(req: Request, res: Response): Promise <void>
    {
        console.log(req.params);
        const {matricul} = req.params;
        const consulta = 'SELECT * FROM datos_personales_alumno WHERE matricula = '+ matricul;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'not found'});
    }
}

export const datosController = new DatosController();