"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reciboRoutes = void 0;
const express_1 = require("express");
const reciboController_1 = require("../controllers/reciboController");
class ReciboRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', reciboController_1.reciboController.list);
        this.router.get('/:id', reciboController_1.reciboController.listOne);
        this.router.post('/', reciboController_1.reciboController.create);
        this.router.delete('/:id', reciboController_1.reciboController.eliminar);
        this.router.put('/:id', reciboController_1.reciboController.actualizar);
    }
}
exports.reciboRoutes = new ReciboRoutes();
exports.default = exports.reciboRoutes.router;
