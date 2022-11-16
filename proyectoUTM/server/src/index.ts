import express, {Application} from 'express'; //libreria
import indexRoutes from './routes/indexRoutes';
import clientesRoutes from './routes/clienteRoutes';
import institutosRoutes from './routes/institutosRoutes';
import morgan from 'morgan';
import cors from 'cors';
class Server //clase
{
    public app: Application; //variable de control
    constructor()
    {
        this.app= express(); //ejecutar servidor
        this.config();
        this.routes();
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