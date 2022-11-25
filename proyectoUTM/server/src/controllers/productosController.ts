import { json } from 'body-parser';
import {Request,response,Response} from 'express';
import pool from '../database';

class ProductosController
{
    public async list(req: Request, res: Response ): Promise<void>
    {
        console.log(req.params);
        const consulta = 'SELECT * FROM productos';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
        
    }        
}

export const productosController = new ProductosController();