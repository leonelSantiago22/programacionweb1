"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personaRoutes = void 0;
const express_1 = require("express");
const personaController_1 = require("../controllers/personaController");
class PersonaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', personaController_1.personaController.list);
        this.router.delete('/delete/:idpersona', personaController_1.personaController.delete);
        this.router.post('/', personaController_1.personaController.create);
        this.router.put('/update/:idpersona', personaController_1.personaController.update);
        this.router.get('/:id1', personaController_1.personaController.listOne);
    }
}
exports.personaRoutes = new PersonaRoutes();
exports.default = exports.personaRoutes.router;
