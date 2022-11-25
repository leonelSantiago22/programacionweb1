"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembresiaRoutes = void 0;
const express_1 = require("express");
const membresiaControllers_1 = require("../controllers/membresiaControllers");
class membresiaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', membresiaControllers_1.MembresiaControllers.listar);
        this.router.get('/:id1', membresiaControllers_1.MembresiaControllers.read);
        this.router.post('/', membresiaControllers_1.MembresiaControllers.create);
    }
}
exports.MembresiaRoutes = new membresiaRoutes();
exports.default = exports.MembresiaRoutes.router;
