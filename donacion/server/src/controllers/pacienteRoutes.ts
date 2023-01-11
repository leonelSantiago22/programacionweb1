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
        const {idpaciente} = req.params;
        const consulta = 'SELECT * FROM paciente WHERE ipaciente = '+ idpaciente;
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
        const {idpaciente} = req.params;
        const resp = await pool.query(`DELETE FROM paciente WHERE idpaciente= ${idpaciente}`);
        res.json(resp);
    }
    public async update(req: Request, res: Response ): Promise<void>
    {
        const { idpaciente } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE paciente set ? WHERE idpaciente = ?", [req.body, idpaciente]);
        res.json(resp);
    }
}

export const  pacienteController = new PacienteController();
