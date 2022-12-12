"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bancoRoutes = void 0;
const express_1 = require("express");
const bancoController_1 = require("../controllers/bancoController");
class BancoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', bancoController_1.bancoController.list);
        this.router.delete('/delete/:idsolicitud', bancoController_1.bancoController.delete);
        this.router.post('/', bancoController_1.bancoController.create);
        this.router.put('/update/:idsolicitud', bancoController_1.bancoController.update);
        this.router.get('/:id1', bancoController_1.bancoController.listOne);
    }
}
exports.bancoRoutes = new BancoRoutes();
exports.default = exports.bancoRoutes.router;
