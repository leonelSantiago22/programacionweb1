"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosRoutes = void 0;
const express_1 = require("express");
const productosController_1 = require("../controllers/productosController");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productosController_1.productosController.list);
    }
}
exports.productosRoutes = new ProductosRoutes();
exports.default = exports.productosRoutes.router;
