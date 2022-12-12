import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController';

class UsuariosRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', usuarioController.list);//obtener la lista de usuarios en la base de datos 
        this.router.get('/:id1', usuarioController.listOne);//obtener solo un usuario dependiendo de su id
        this.router.post('/', usuarioController.crear_usuario);//crear un nuevo usuario 
        this.router.put('/update/:id', usuarioController.actualizar_usuario);//actualizar un usuario
        this.router.delete('/delete/:id', usuarioController.eliminar_usuario);//eliminar a un usuario

        //this.router.get('/:id1/:id2',usuarioController.listRange);
    }

}
export const usuariosRoutes = new UsuariosRoutes();

export default usuariosRoutes.router;