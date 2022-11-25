import {Request,Response} from 'express';
import pool from '../database';
class ClientesController
{
    public async list(req: Request, res: Response ): Promise<void>{
    console.log(req.params)
    const consulta = 'SELECT * FROM clientes';
    console.log(consulta)
    const respuesta = await pool.query(consulta);
    console.log(respuesta);
    res.json( respuesta );
    }

    public async listOne(req: Request, res: Response): Promise <void>
    {
        console.log(req.params);
        const {id1} = req.params;
        const consulta = 'SELECT * FROM clientes WHERE id = '+ id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Cliente no encontrado'});
    }
    public async listRange(req: Request, res: Response): Promise <void>{
            console.log("listRange")
            const {id1,id2} = req.params;
            console.log(id1,id2)
            const consulta = 'SELECT * FROM clientes WHERE id >= '+ id1+' and id<='+id2;
            console.log(consulta);
    }
    public async listFecha(req: Request, res: Response): Promise <void>
    {
            console.log("listFecha");
            const {fechaIni, fechaFin} = req.params;
            const consulta = `SELECT * FROM clientes WHERE fechainicio >= ${fechaIni} and fechafin <= ${fechaFin}`;
            console.log(consulta);
            const respuesta = await pool.query(consulta);
            res.json(respuesta);
    }
    public async create(req: Request, res: Response): Promise<void> 
    {
        console.log(req);
        const resp = await pool.query("INSERT INTO clientes set ?", [req.body]); //recibira los parametros por el body
        res.json(resp);
    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM clientes WHERE id = ${id}`);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE clientes set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }
        
}
export const clientesController = new ClientesController();

