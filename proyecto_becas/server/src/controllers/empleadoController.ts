import { Request, Response } from "express";
import pool from "../database";


class EmpleadoController {
    public async list(req: Request, res: Response) {
        console.log(req.params);
        const consulta = 'SELECT * FROM empleado';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async create(req: Request, res: Response ): Promise<void>
    {
        console.log(req);
        const resp = await pool.query("INSERT INTO empleado set ?", [req.body]); //recibira los parametros por el body
        res.json(resp);   
    }
    public async delete(req: Request, res: Response): Promise<void>    
    {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM empleado WHERE numero_empleado = ${id}`);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE empleado set ? WHERE numero_empleado = ?", [req.body, id]);
        res.json(resp);
    }
    public async listOne(req: Request, res: Response): Promise <void>
    {
        console.log(req.params);
        const {id1} = req.params;
        const consulta = 'SELECT * FROM empleado WHERE numero_empleado = '+ id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'not found'});
    }
}

export const empleadoController = new EmpleadoController();