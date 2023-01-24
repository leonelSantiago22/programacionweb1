import { Router } from "express";
import { empleadoController } from "../controllers/empleadoController";

class EmpleadoRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', empleadoController.list);
        this.router.get('/:id1',empleadoController.listOne);
        this.router.post('/', empleadoController.create);
        this.router.delete('/actualiza/:id1', empleadoController.delete);
        this.router.put('/elimina/:id1', empleadoController.actualizar);
        
    }
}

export const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;