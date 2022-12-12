import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import datosRoutes from './routes/datosRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import ingresoRoutes from './routes/ingresosRoutes';
import automovilRoutes from './routes/automovilRoutes';
class Server {
    public app : Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
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
        this.app.use('/api/datos', datosRoutes);
        this.app.use('/api/usuarios', usuarioRoutes);
        this.app.use('/api/ingresos', ingresoRoutes);
        this.app.use('/api/automovil', automovilRoutes);
    }
    start() : void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    } 
}

const server = new Server();
server.start();