import { Request, Response } from 'express';
import pool from '../database';
class UsuarioController {
   //funcion para listar a los usuarios 
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params)
        const consulta = 'SELECT * FROM usuarios';
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);

    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM usuarios WHERE id_usuario = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'usuario no encontrado' });
    }
    public async crear_usuario(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO usuarios set ?",[req.body]);
        res.json(resp);
    }

    public async actualizar_usuario(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE usuarios set ? WHERE correo = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminar_usuario(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM usuarios WHERE correo = ${id}`);
        res.json(resp);
    }

}
export const usuarioController = new UsuarioController();

