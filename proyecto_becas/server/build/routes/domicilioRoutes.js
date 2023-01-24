"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domicilioRoutes = void 0;
const express_1 = require("express");
const domicilioController_1 = require("../controllers/domicilioController");
class DomicilioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', domicilioController_1.domicilioController.list);
        this.router.get('/:id', domicilioController_1.domicilioController.listOne);
        this.router.post('/', domicilioController_1.domicilioController.create);
        this.router.delete('/:id', domicilioController_1.domicilioController.eliminar);
        this.router.put('/:id', domicilioController_1.domicilioController.actualizar);
    }
}
exports.domicilioRoutes = new DomicilioRoutes();
exports.default = exports.domicilioRoutes.router;
