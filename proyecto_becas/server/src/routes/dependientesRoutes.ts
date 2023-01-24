import { Router } from "express";
import { dependientesController } from "../controllers/dependientesController";

class DependientesRoutes {
    public router: Router = Router();
    constructor() {
    this.config();
    }
    config() : void {
        this.router.get('/', dependientesController.list);
        this.router.get('/:id',dependientesController.listOne);
        this.router.post('/', dependientesController.create);
        this.router.delete('/:id', dependientesController.delete);
        this.router.put('/:id', dependientesController.actualizar);

    }
}
export const dependientesRoutes = new DependientesRoutes();
export default dependientesRoutes.router;