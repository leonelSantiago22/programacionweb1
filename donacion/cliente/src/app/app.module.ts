import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from "@angular/common/http";
import { PacienteComponent } from './components/paciente/paciente.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { DonadoresComponent } from './components/donadores/donadores.component';
import { BolsaComponent } from './components/bolsa/bolsa.component';
import { MainComponent } from './components/main/main.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { EnfermeraComponent } from './components/enfermera/enfermera.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { TransfucionesComponent } from './components/transfuciones/transfuciones.component';
import { DonacionComponent } from './components/donacion/donacion.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { PersonaComponent } from './components/persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PacienteComponent,
    SolicitudComponent,
    DonadoresComponent,
    BolsaComponent,
    MainComponent,
    InventarioComponent,
    EnfermeraComponent,
    HospitalComponent,
    TransfucionesComponent,
    DonacionComponent,
    RegistrosComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
