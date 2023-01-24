"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empleadoRoutes = void 0;
const express_1 = require("express");
const empleadoController_1 = require("../controllers/empleadoController");
class EmpleadoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', empleadoController_1.empleadoController.list);
        this.router.get('/:id1', empleadoController_1.empleadoController.listOne);
        this.router.post('/', empleadoController_1.empleadoController.create);
        this.router.delete('/actualiza/:id1', empleadoController_1.empleadoController.delete);
        this.router.put('/elimina/:id1', empleadoController_1.empleadoController.actualizar);
    }
}
exports.empleadoRoutes = new EmpleadoRoutes();
exports.default = exports.empleadoRoutes.router;
