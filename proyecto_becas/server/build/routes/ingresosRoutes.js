"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingresoRoutes = void 0;
const express_1 = require("express");
const ingresoController_1 = require("../controllers/ingresoController");
class IngresoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ingresoController_1.ingresoController.list);
        this.router.get('/:id1', ingresoController_1.ingresoController.read);
        this.router.post('/', ingresoController_1.ingresoController.create);
        this.router.delete('/:id1', ingresoController_1.ingresoController.delete);
        this.router.put('/:id1', ingresoController_1.ingresoController.actualizar);
    }
}
exports.ingresoRoutes = new IngresoRoutes();
exports.default = exports.ingresoRoutes.router;
