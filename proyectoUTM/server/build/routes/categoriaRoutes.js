"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaRoutes = void 0;
const express_1 = require("express");
const categoriaControllers_1 = require("../controllers/categoriaControllers");
class CategoriaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', categoriaControllers_1.categoriaController.list);
    }
}
exports.categoriaRoutes = new CategoriaRoutes();
exports.default = exports.categoriaRoutes.router;
