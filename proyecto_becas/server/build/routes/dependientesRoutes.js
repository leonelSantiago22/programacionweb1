"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dependientesRoutes = void 0;
const express_1 = require("express");
const dependientesController_1 = require("../controllers/dependientesController");
class DependientesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', dependientesController_1.dependientesController.list);
        this.router.get('/:id', dependientesController_1.dependientesController.listOne);
        this.router.post('/', dependientesController_1.dependientesController.create);
        this.router.delete('/:id', dependientesController_1.dependientesController.delete);
        this.router.put('/:id', dependientesController_1.dependientesController.actualizar);
    }
}
exports.dependientesRoutes = new DependientesRoutes();
exports.default = exports.dependientesRoutes.router;
