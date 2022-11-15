import { Request, Response } from "express"; 
import key from "../keys";
import mysql from "promise-mysql";
import  pool  from '../database';

class ClienteRoutes
{
    public async list(req: Request, res: Response): Promise<void>
    {
        const respuesta  = await pool.query('SELECT * FROM clientes');
        res.json(respuesta);
    }
}