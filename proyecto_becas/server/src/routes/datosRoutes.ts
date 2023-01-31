import { Router } from "express";
import { datosController } from "../controllers/datosController";

class DatosRoutes {
    public router: Router = Router();
    constructor() {
    this.config();
    }
    config() : void {
        this.router.get('/', datosController.list);
        this.router.get('/:matricula',datosController.read);
        this.router.get('/listid/:idusuario',datosController.listOnePorId);
        //this.router.post('/existencia',datosController.existencia);
        this.router.post('/', datosController.create);
        this.router.delete('/:matricula', datosController.delete);
        this.router.put('/:matricula', datosController.actualizar);

    }
}
export const datosRoutes = new DatosRoutes();
export default datosRoutes.router;