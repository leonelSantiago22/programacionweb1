import { Router } from "express";
import { ingresoController } from "../controllers/ingresoController";

class IngresoRoutes {
    public router: Router = Router();
    constructor() {
    this.config();
    }
    config() : void {
        this.router.get('/', ingresoController.list);
        this.router.get('/:id1',ingresoController.listOne);
        this.router.post('/', ingresoController.create);
        this.router.delete('/:id1', ingresoController.delete);
        this.router.put('/:id1', ingresoController.actualizar);

    }
}
export const ingresoRoutes = new IngresoRoutes();
export default ingresoRoutes.router;