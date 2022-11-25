import { Router } from 'express';
class InstitutosRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
    this.router.get('/',(req,res) => res.send('probando institutos'));
}
}
const institutosRoutes= new InstitutosRoutes();
export default institutosRoutes.router;