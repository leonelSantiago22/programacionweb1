import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FempleadosComponent } from './components/fempleados/fempleados.component';
import { UsuarioAdminComponent } from './components/usuario-admin/usuario-admin.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    HomeComponent,
    NavbarComponent,
    FempleadosComponent,
    UsuarioAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
