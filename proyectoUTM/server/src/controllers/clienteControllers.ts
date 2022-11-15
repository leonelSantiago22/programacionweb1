import { Request, Response } from "express"; 
import  pool  from '../database';


class ClientesController
{
    public async list(req: Request, res: Response): Promise<void>
    {
        console.log(req);
        const consulta = 'SELECT * FROM clientes';
        console.log(consulta); 
        const respuesta  = (await pool).query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
}
export const clientesController = new ClientesController();