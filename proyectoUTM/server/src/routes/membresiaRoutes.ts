import {Request,Response} from 'express';
import pool from '../database';
import { Router } from 'express';
import { MembresiaControllers } from '../controllers/membresiaControllers';


class membresiaRoutes
{
    public router: Router=Router();
    constructor()
    {
    this.config();
    }
    config() : void
        {
            this.router.get('/', MembresiaControllers.listar);
            this.router.get('/:id1', MembresiaControllers.read);
            this.router.post('/', MembresiaControllers.create);
        }
}

export const MembresiaRoutes = new membresiaRoutes();
export default MembresiaRoutes.router;