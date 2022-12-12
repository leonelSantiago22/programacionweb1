"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosRoutes = void 0;
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuarioController_1.usuarioController.list); //obtener la lista de usuarios en la base de datos 
        this.router.get('/:id1', usuarioController_1.usuarioController.listOne); //obtener solo un usuario dependiendo de su id
        this.router.post('/', usuarioController_1.usuarioController.crear_usuario); //crear un nuevo usuario 
        this.router.put('/update/:id', usuarioController_1.usuarioController.actualizar_usuario); //actualizar un usuario
        this.router.delete('/delete/:id', usuarioController_1.usuarioController.eliminar_usuario); //eliminar a un usuario
        //this.router.get('/:id1/:id2',usuarioController.listRange);
    }
}
exports.usuariosRoutes = new UsuariosRoutes();
exports.default = exports.usuariosRoutes.router;
