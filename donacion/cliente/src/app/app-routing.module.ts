import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { BolsaComponent } from './components/bolsa/bolsa.component';
import { DonadoresComponent } from './components/donadores/donadores.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { MainComponent } from './components/main/main.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',

    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'solicitud', 
    component: SolicitudComponent
  },
  {
    path: 'bolsa_de_sangre',
    component: BolsaComponent
  },
  {
    path: 'paciente',
    component: PacienteComponent
  },
  {
    path: 'donadores', 
    component: DonadoresComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
