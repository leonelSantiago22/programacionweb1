import { json } from 'body-parser';
import {Request,response,Response} from 'express';
import pool from '../database';

class PersonaController 
{   
    public async list(req:Request,res:Response): Promise<void>
    {
        console.log(req.params);
        const consulta = 'SELECT * FROM persona';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async create(req: Request, res: Response ): Promise<void>
    {
        console.log(req);
        const resp = await pool.query("INSERT INTO persona set ?", [req.body]); //recibira los parametros por el body
        res.json(resp);   
    }
    public async delete(req: Request, res: Response ): Promise<void>
    {
        const { idsolicitud } = req.params;
        const resp = await pool.query(`DELETE FROM persona WHERE idpersona= ${idsolicitud}`);
        res.json(resp);
    }
    public async update(req: Request, res: Response ): Promise<void>
    {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE persona set ? WHERE idpersona = ?", [req.body, id]);
        res.json(resp);
    }
}

export const  personaController = new PersonaController();
