"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRoutes = void 0;
const express_1 = require("express");
const usuariocontrollers_1 = require("../controllers/usuariocontrollers");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/verificarUsuario/', usuariocontrollers_1.UsuarioController.verificarUsario);
        this.router.get('/esActivo/:id1', usuariocontrollers_1.UsuarioController.esActivo);
    }
}
exports.usuarioRoutes = new UsuarioRoutes();
exports.default = exports.usuarioRoutes.router;
