import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  
  tipoUsuario:number;
  constructor(){
    this.tipoUsuario =1;
    $(function () {$(".button-collapse").sideNav();})
  }
}
