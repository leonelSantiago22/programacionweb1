import { Router } from "express";
import { domicilioController } from "../controllers/domicilioController";

class DomicilioRoutes {
    public router: Router = Router();
    constructor() {
    this.config();
    }
    config() : void {
        this.router.get('/', domicilioController.list);
        this.router.get('/:id',domicilioController.listOne);
        this.router.post('/', domicilioController.create);
        this.router.delete('/:id', domicilioController.eliminar);
        this.router.put('/:id', domicilioController.actualizar);

    }
}
export const domicilioRoutes = new DomicilioRoutes();
export default domicilioRoutes.router;