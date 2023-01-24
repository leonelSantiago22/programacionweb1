import { Request, Response } from 'express';
import pool from '../database';
class DependientesController {
   //funcion para listar a los usuarios 
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params)
        const consulta = 'SELECT * FROM dependientes';
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);

    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM usuarios WHERE id_dependiente = ' + id1;
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
        const resp = await pool.query("INSERT INTO dependientes set ?",[req.body]);
        res.json(resp);
    }

    public async actualizar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE dependientes set ? WHERE id_dependiente = ?", [req.body, id]);
        res.json(resp);
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM dependientes WHERE id_dependiente = ${id}`);
        res.json(resp);
    }
}
export const dependientesController = new DependientesController();

