import { Router } from "express";
import { tutorController } from "../controllers/tutorController";

class TutorRoutes {
    public router: Router = Router();
    constructor() {
    this.config();
    }
    config() : void {
        this.router.get('/', tutorController.list);
        this.router.get('/:id',tutorController.listOne);
        this.router.post('/', tutorController.create);
        this.router.delete('/eliminar/:id', tutorController.eliminar);
        this.router.put('/actualizar/:id', tutorController.actualizar);

    }
}
export const tutorRoutes = new TutorRoutes();
export default tutorRoutes.router;