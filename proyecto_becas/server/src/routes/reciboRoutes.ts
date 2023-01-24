import { Router } from "express";
import { reciboController } from "../controllers/reciboController";

class ReciboRoutes {
    public router: Router = Router();
    constructor() {
    this.config();
    }
    config() : void {
        this.router.get('/', reciboController.list);
        this.router.get('/:id',reciboController.listOne);
        this.router.post('/', reciboController.create);
        this.router.delete('/:id', reciboController.eliminar);
        this.router.put('/:id', reciboController.actualizar);

    }
}
export const reciboRoutes = new ReciboRoutes();
export default reciboRoutes.router;