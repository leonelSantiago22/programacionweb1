"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosController = void 0;
const database_1 = __importDefault(require("../database"));
class DatosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const consulta = 'SELECT * FROM datos_personales_alumno';
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOnePorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { idusuario } = req.params;
            const consulta = 'SELECT * FROM datos_personales_alumno WHERE idusuario = ' + idusuario;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Trabajador no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            const resp = yield database_1.default.query("INSERT INTO datos_personales_alumno set ?", [req.body]); //recibira los parametros por el body
            res.json(resp);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { matricula } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM datos_personales_alumno WHERE matricula = ${matricula}`);
            res.json(resp);
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { matricula } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE datos_personales_alumno set ? WHERE matricula = ?", [req.body, matricula]);
            res.json(resp);
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { matricula } = req.params;
            const consulta = 'SELECT * FROM datos_personales_alumno WHERE matricula = ' + matricula;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'not found' });
        });
    }
    existencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consulta = `SELECT * FROM datos_personales_alumno WHERE matricula="${req.body.numero_trabajador}"`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length == 0) {
                console.log("null");
                res.json(null);
                return;
            }
            else {
                res.json(respuesta[0]);
                return;
            }
        });
    }
}
exports.datosController = new DatosController();
