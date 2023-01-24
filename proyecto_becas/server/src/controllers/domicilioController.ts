import { Request, Response } from 'express';
import pool from '../database';
class DomicilioController {
   //funcion para listar a los usuarios 
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params)
        const consulta = 'SELECT * FROM domicilio_actual';
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);

    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM domicilio_actual WHERE id_domicilio = ' + id1;
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
        const resp = await pool.query("INSERT INTO domicilio_actual set ?",[req.body]);
        res.json(resp);
    }

    public async actualizar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE domicilio_actual set ? WHERE id_domicilio = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM domicilio_actual WHERE id_domicilio = ${id}`);
        res.json(resp);
    }
}
export const domicilioController = new DomicilioController();

