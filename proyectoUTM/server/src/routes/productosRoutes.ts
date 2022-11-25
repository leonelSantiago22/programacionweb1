import {Request,Response} from 'express';
import pool from '../database';
import { Router } from 'express';

import { productosController } from '../controllers/productosController';

class ProductosRoutes
{
    public router: Router = Router();
    constructor()
    {
        this.config();
    }
    config(): void
    {
        this.router.get('/', productosController.list);
    }
}
export const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;