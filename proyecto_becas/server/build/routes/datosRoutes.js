"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosRoutes = void 0;
const express_1 = require("express");
const datosController_1 = require("../controllers/datosController");
class DatosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', datosController_1.datosController.list);
        this.router.get('/:matricul', datosController_1.datosController.read);
        this.router.post('/', datosController_1.datosController.create);
        this.router.delete('/:matricul', datosController_1.datosController.delete);
        this.router.put('/:matricul', datosController_1.datosController.actualizar);
    }
}
exports.datosRoutes = new DatosRoutes();
exports.default = exports.datosRoutes.router;
