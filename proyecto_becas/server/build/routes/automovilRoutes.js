"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.automovilRoutes = void 0;
const express_1 = require("express");
const automovilController_1 = require("../controllers/automovilController");
class AutomovilRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', automovilController_1.automovilController.list);
    }
}
exports.automovilRoutes = new AutomovilRoutes();
exports.default = exports.automovilRoutes.router;
