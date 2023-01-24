import { Request, Response } from "express";
import pool from "../database";

class AutomovilController {
    public async list(req: Request, res: Response) {
        console.log(req.params);
        const consulta = 'SELECT * FROM automovil';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async create(req: Request, res: Response ): Promise<void>
    {
        console.log(req);
        const resp = await pool.query("INSERT automovil INTO  set ?", [req.body]); //recibira los parametros por el body
        res.json(resp);   
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { idautomovil } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE automovil set ? WHERE idautomovil = ?", [req.body, idautomovil]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void>    
    {
        const { idautomovil } = req.params;
        const resp = await pool.query(`DELETE FROM automovil WHERE idautomovil = ${idautomovil}`);
        res.json(resp);
    }
    
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM usuarios WHERE idautomovil = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'no encontrado' });
    }

    
}

export const automovilController = new AutomovilController();