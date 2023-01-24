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
exports.usuarioController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    //funcion para listar a los usuarios 
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const consulta = 'SELECT * FROM usuarios';
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { idusuario } = req.params;
            const consulta = 'SELECT * FROM usuarios WHERE idusuario = ' + idusuario;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'usuario no encontrado' });
        });
    }
    crear_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO usuarios set ?", [req.body]);
            res.json(resp);
        });
    }
    actualizar_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE usuarios set ? WHERE correo = ?", [req.body, id]);
            res.json(resp);
        });
    }
    eliminar_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM usuarios WHERE correo = ${id}`);
            res.json(resp);
        });
    }
    verificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consulta = `SELECT tipo FROM usuarios WHERE correo="${req.body.correo}" and password="${req.body.password}"`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length == 0) {
                console.log("null");
                res.json(null);
            }
            else {
                res.json(respuesta[0]);
            }
        });
    }
}
exports.usuarioController = new UsuarioController();
