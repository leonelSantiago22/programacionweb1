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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PacienteComponent,
    SolicitudComponent,
    DonadoresComponent,
    BolsaComponent,
    MainComponent,
    InventarioComponent
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
