import { json } from 'body-parser';
import {Request,response,Response} from 'express';
import pool from '../database';

class membresiaControllers
{
    public async listar(req: Request, res: Response): Promise<void>
    {
        console.log(req.params);
        const consulta = 'SELECT * FROM membresia';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        res.json(respuesta);        
    }
    public async read(req: Request, res: Response): Promise <void>
    {
        console.log(req.params);
        const {id1} = req.params;
        const consulta = 'SELECT * FROM membresia WHERE idMembresia = '+ id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Membresia no encontrado'});
    }
    public async create(req: Request, res: Response): Promise<void> 
    {
        console.log(req);
        const resp = await pool.query("INSERT INTO membresia set ?", [req.body]); //recibira los parametros por el body
        res.json(resp);
    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM membresia WHERE idMembresia = ${id}`);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE memebresia set ? WHERE idMembresia = ?", [req.body, id]);
        res.json(resp);
    }
}

export const MembresiaControllers = new membresiaControllers();