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
            this.router.get('/usuarios', UsuarioController.list);
            this.router.get('/verificarUsuario/', UsuarioController.verificarUsario);
            this.router.get('/esActivo/:id1', UsuarioController.esActivo);
            
        }

}
export const usuarioRoutes = new UsuarioRoutes();

export default usuarioRoutes.router;