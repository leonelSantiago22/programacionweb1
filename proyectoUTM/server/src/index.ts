import express, {Application} from 'express'; //libreria
import indexRoutes from './routes/indexRoutes';
import clientesRoutes from './routes/clienteRoutes';
import institutosRoutes from './routes/institutosRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import membresiaRoutes from './routes/membresiaRoutes';
import productosRoutes from './routes/productosRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
import morgan from 'morgan';
import cors from 'cors';
import swagger_ui_express from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

class Server //clase
{
    public app: Application; //variable de control
    constructor()
    {
        this.app= express(); //ejecutar servidor
        this.config();
        this.routes();
        this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
    }
    config (): void //definir propiedades del servidor (en este caso el puerto)
    {
        this.app.set('port',process.env.PORT|| 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes (): void
    {
        this.app.use(indexRoutes);
        this.app.use('/api/institutos',institutosRoutes);
        this.app.use('/api/clientes',clientesRoutes);
        this.app.use('/api/usuarios', usuarioRoutes);
        this.app.use('/api/membresias', membresiaRoutes);
        this.app.use('/api/productos', productosRoutes);
        this.app.use('/api/categoria', categoriaRoutes);
    }
    start (): void
    {
        this.app.listen(this.app.get('port'), () =>
        {
        console.log('Servidor se encuentra en el puerto: ',this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();