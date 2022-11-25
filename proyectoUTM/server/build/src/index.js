"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //libreria
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const institutosRoutes_1 = __importDefault(require("./routes/institutosRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const membresiaRoutes_1 = __importDefault(require("./routes/membresiaRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../swagger.json"));
class Server //clase
 {
    constructor() {
        this.app = (0, express_1.default)(); //ejecutar servidor
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
        this.app.use('/api/institutos', institutosRoutes_1.default);
        this.app.use('/api/clientes', clienteRoutes_1.default);
        this.app.use('/api/usuarios', usuarioRoutes_1.default);
        this.app.use('/api/membresias', membresiaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor se encuentra en el puerto: ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
