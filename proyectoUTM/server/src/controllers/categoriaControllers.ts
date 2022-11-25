import { json } from 'body-parser';
import {Request,response,Response} from 'express';
import pool from '../database';


class CategoriaController
{
    public async list(req: Request, res: Response ): Promise<void>
    {
        console.log(req.params);
        const consulta = 'SELECT * FROM categoria';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
        
    }   
}

export const categoriaController = new CategoriaController();