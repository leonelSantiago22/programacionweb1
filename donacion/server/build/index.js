"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const solicitudRoutes_1 = __importDefault(require("./routes/solicitudRoutes"));
const pacienteRoutes_1 = __importDefault(require("./routes/pacienteRoutes"));
const personaRoutes_1 = __importDefault(require("./routes/personaRoutes"));
const donadorRoutes_1 = __importDefault(require("./routes/donadorRoutes"));
const bancoRoutes_1 = __importDefault(require("./routes/bancoRoutes"));
const bolsaRoutes_1 = __importDefault(require("./routes/bolsaRoutes"));
const donacionRoutes_1 = __importDefault(require("./routes/donacionRoutes"));
const inventarioRoutes_1 = __importDefault(require("./routes/inventarioRoutes"));
const registroRoutes_1 = __importDefault(require("./routes/registroRoutes"));
const transfucionRoutes_1 = __importDefault(require("./routes/transfucionRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/usuarios', usuarioRoutes_1.default);
        this.app.use('/api/solicitud', solicitudRoutes_1.default);
        this.app.use('/api/paciente', pacienteRoutes_1.default);
        this.app.use('/api/persona', personaRoutes_1.default);
        this.app.use('/api/donador', donadorRoutes_1.default);
        this.app.use('/api/banco', bancoRoutes_1.default);
        this.app.use('/api/bolsa', bolsaRoutes_1.default);
        this.app.use('/api/donacion', donacionRoutes_1.default);
        this.app.use('/api/inventario', inventarioRoutes_1.default);
        this.app.use('/api/registro', registroRoutes_1.default);
        this.app.use('/api/transfucion', transfucionRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
