import { Router } from "express";
import { datosController } from "../controllers/datosController";

class DatosRoutes {
    public router: Router = Router();
    constructor() {
    this.config();
    }
    config() : void {
        this.router.get('/', datosController.list);
        this.router.get('/:matricul',datosController.read);
        this.router.post('/', datosController.create);
        this.router.delete('/:matricul', datosController.delete);
        this.router.put('/:matricul', datosController.actualizar);

    }
}
export const datosRoutes = new DatosRoutes();
export default datosRoutes.router;