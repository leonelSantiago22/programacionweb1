import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { EncargadoComponent } from './components/encargado/encargado.component'
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { Navigation } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
const routes: Routes = [{
  path: "",
  redirectTo: "/login",
  pathMatch: "full"
  },
  {
  path: 'login',
  component: LoginComponent,
  },{
    path: 'encargado',
    component: EncargadoComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
      children: [
      {
        path: 'categoria',
        component: CategoriasComponent
      },
      ]
      }
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
