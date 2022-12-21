import {Request,Response} from 'express';
import pool from '../database';
import { Router } from 'express';
import { UsuarioController } from '../controllers/usuariocontrollers';

class UsuarioRoutes
{

    public router: Router=Router();
    constructor()
    {
    this.config();
    }
    config() : void
        {
            this.router.get('/', UsuarioController.list);
            this.router.post('/verificarUsuario/', UsuarioController.verificarUsario);
            this.router.get('/esActivo/:id1', UsuarioController.esActivo);
            this.router.post('/', UsuarioController.create);
        }

}
export const usuarioRoutes = new UsuarioRoutes();

export default usuarioRoutes.router;