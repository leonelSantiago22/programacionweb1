"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientesRoutes = void 0;
const express_1 = require("express");
const clienteControllers_1 = require("../controllers/clienteControllers");
class ClientesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', clienteControllers_1.clientesController.list);
        this.router.get('/:id1', clienteControllers_1.clientesController.listOne);
        this.router.get('/:fechaIni/:fechaFin', clienteControllers_1.clientesController.listFecha);
        this.router.get('/:id1/:id2', clienteControllers_1.clientesController.listRange);
        this.router.post('/', clienteControllers_1.clientesController.create);
        this.router.delete('/:id', clienteControllers_1.clientesController.eliminar);
        this.router.put('/:id', clienteControllers_1.clientesController.actualizar);
    }
}
exports.clientesRoutes = new ClientesRoutes();
exports.default = exports.clientesRoutes.router;
