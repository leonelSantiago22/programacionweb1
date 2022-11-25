import {Request,Response} from 'express';
import pool from '../database';
import { Router } from 'express';

import { categoriaController } from '../controllers/categoriaControllers';

class CategoriaRoutes
{
    public router: Router = Router();
    constructor()
    {
        this.config();
    }
    config(): void
    {
        this.router.get('/', categoriaController.list);
    }
}
export const categoriaRoutes = new CategoriaRoutes();
export default categoriaRoutes.router;
