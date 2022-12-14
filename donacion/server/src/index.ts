import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import swagger_ui_express from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import solicitudRoutes from './routes/solicitudRoutes';
import pacienteRoutes from './routes/pacienteRoutes';
import personaRoutes from './routes/personaRoutes';
import donadorRoutes from './routes/donadorRoutes';
import bancoRoutes from './routes/bancoRoutes';
import bolsaRoutes from './routes/bolsaRoutes';
import donacionRoutes from './routes/donacionRoutes';
import inventarioRoutes from './routes/inventarioRoutes';
import registroRoutes from './routes/registroRoutes';
import transfucionRoutes from './routes/transfucionRoutes';
import enfermeraRoutes from './routes/enfermeraRoutes';
class Server {
    public app : Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
    }
    config() : void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes() : void {
        this.app.use(indexRoutes);
        this.app.use('/api/usuarios', usuarioRoutes);
        this.app.use('/api/solicitud', solicitudRoutes);
        this.app.use('/api/paciente',pacienteRoutes);
        this.app.use('/api/persona', personaRoutes);
        this.app.use('/api/donador', donadorRoutes);
        this.app.use('/api/banco', bancoRoutes);
        this.app.use('/api/bolsa', bolsaRoutes);
        this.app.use('/api/donacion', donacionRoutes);
        this.app.use('/api/inventario', inventarioRoutes);
        this.app.use('/api/registro',registroRoutes);
        this.app.use('/api/transfucion', transfucionRoutes);
        this.app.use('/api/enfermera', enfermeraRoutes);
    }
    start() : void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    } 
}

const server = new Server();
server.start();