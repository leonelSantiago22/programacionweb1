import { Request, Response } from 'express';
import pool from '../database';
class ReciboController {
   //funcion para listar a los usuarios 
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params)
        const consulta = 'SELECT * FROM recibos';
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);

    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM recibos WHERE id_recibo = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO recibos set ?",[req.body]);
        res.json(resp);
    }

    public async actualizar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE recibos set ? WHERE id_recibo = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM recibos WHERE id_recibo = ${id}`);
        res.json(resp);
    }
    
}
export const reciboController = new ReciboController();

