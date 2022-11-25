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
exports.clientesController = void 0;
const database_1 = __importDefault(require("../database"));
class ClientesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const consulta = 'SELECT * FROM clientes';
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id1 } = req.params;
            const consulta = 'SELECT * FROM clientes WHERE id = ' + id1;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Cliente no encontrado' });
        });
    }
    listRange(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("listRange");
            const { id1, id2 } = req.params;
            console.log(id1, id2);
            const consulta = 'SELECT * FROM clientes WHERE id >= ' + id1 + ' and id<=' + id2;
            console.log(consulta);
        });
    }
    listFecha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("listFecha");
            const { fechaIni, fechaFin } = req.params;
            const consulta = `SELECT * FROM clientes WHERE fechainicio >= ${fechaIni} and fechafin <= ${fechaFin}`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            res.json(respuesta);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            const resp = yield database_1.default.query("INSERT INTO clientes set ?", [req.body]); //recibira los parametros por el body
            res.json(resp);
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM clientes WHERE id = ${id}`);
            res.json(resp);
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE clientes set ? WHERE id = ?", [req.body, id]);
            res.json(resp);
        });
    }
}
exports.clientesController = new ClientesController();
