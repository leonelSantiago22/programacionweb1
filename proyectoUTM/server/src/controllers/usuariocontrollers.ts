import { json } from 'body-parser';
import {Request,response,Response} from 'express';
import pool from '../database';

class usuarioController
{
    public async verificarUsario(req: Request, res: Response): Promise<void>
    {
        console.log(req.body);
        const consulta = `SELECT *  FROM usuario WHERE id `;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
        response.json('1');
    }
    public async esActivo(req: Request, res: Response): Promise <void>
    {
        console.log(req.body);
        const { id } = req.params;
        const consulta = `SELECT * FROM clientes WHERE CURRENT_DATE>=fechainicio and CURRENT_DATE<=CURRENT_DATE and id=${id}`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async list(req: Request, res: Response): Promise <void>
    {
        console.log(req.body);
        const consulta = `SELECT * FROM usuarios`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async create(req: Request, res: Response): Promise<void> 
    {
        console.log(req);
        const resp = await pool.query("INSERT INTO usuarios  set ?", [req.body]); //recibira los parametros por el body
        res.json(resp);
    }
}
export const UsuarioController = new usuarioController();
