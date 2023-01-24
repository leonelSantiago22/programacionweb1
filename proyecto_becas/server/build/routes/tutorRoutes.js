"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorRoutes = void 0;
const express_1 = require("express");
const tutorController_1 = require("../controllers/tutorController");
class TutorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tutorController_1.tutorController.list);
        this.router.get('/:id', tutorController_1.tutorController.listOne);
        this.router.post('/', tutorController_1.tutorController.create);
        this.router.delete('/eliminar/:id', tutorController_1.tutorController.eliminar);
        this.router.put('/actualizar/:id', tutorController_1.tutorController.actualizar);
    }
}
exports.tutorRoutes = new TutorRoutes();
exports.default = exports.tutorRoutes.router;
