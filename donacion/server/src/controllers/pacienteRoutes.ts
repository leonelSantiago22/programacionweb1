import { json } from 'body-parser';
import {Request,response,Response} from 'express';
import pool from '../database';

class PacienteController 
{   
    public async list(req:Request,res:Response): Promise<void>
    {
        console.log(req.params);
        const consulta = 'SELECT * FROM paciente';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise <void>
    {
        console.log(req.params);
        const {id1} = req.params;
        const consulta = 'SELECT * FROM paciente WHERE ipaciente = '+ id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Cliente no encontrado'});
    }
    public async create(req: Request, res: Response ): Promise<void>
    {
        console.log(req);
        const resp = await pool.query("INSERT INTO paciente set ?", [req.body]); //recibira los parametros por el body
        res.json(resp);   
    }
    public async delete(req: Request, res: Response ): Promise<void>
    {
        const { idsolicitud } = req.params;
        const resp = await pool.query(`DELETE FROM paciente WHERE idpaciente= ${idsolicitud}`);
        res.json(resp);
    }
    public async update(req: Request, res: Response ): Promise<void>
    {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE paciente set ? WHERE idpaciente = ?", [req.body, id]);
        res.json(resp);
    }
}

export const  pacienteController = new PacienteController();
