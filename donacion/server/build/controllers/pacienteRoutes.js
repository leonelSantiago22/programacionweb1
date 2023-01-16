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
exports.pacienteController = void 0;
const database_1 = __importDefault(require("../database"));
class PacienteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const consulta = 'SELECT * FROM paciente';
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { idpaciente } = req.params;
            const consulta = 'SELECT * FROM paciente WHERE idpaciente = ' + idpaciente;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Cliente no encontrado' });
        });
    }
    listOneCartesiano(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { idpaciente, idpersona } = req.params;
            const consulta = `SELECT * FROM paciente,persona WHERE paciente.idpersona =${idpersona} and persona.idpersona=${idpersona} and paciente.idpaciente=${idpaciente}`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Cliente no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            const resp = yield database_1.default.query("INSERT INTO paciente set ?", [req.body]); //recibira los parametros por el body
            res.json(resp);
        });
    }
    //INSERT INTO persona (idpersona, nombre, edad, genero) VALUES (NULL, 'Pedro picos piedra', '134', 'M');
    //INSERT INTO paciente(idpaciente, idpersona, tipodesangre) VALUES(NULL, SELECT max(idpersona) FROM persona, 'AR+H')
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idpaciente } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM paciente WHERE idpaciente= ${idpaciente}`);
            res.json(resp);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idpaciente } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE paciente set ? WHERE idpaciente = ?", [req.body, idpaciente]);
            res.json(resp);
        });
    }
}
exports.pacienteController = new PacienteController();
