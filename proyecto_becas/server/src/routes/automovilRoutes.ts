import { Router } from "express";
import { automovilController } from "../controllers/automovilController";

class AutomovilRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', automovilController.list);
    }
}

export const automovilRoutes = new AutomovilRoutes();
export default automovilRoutes.router;