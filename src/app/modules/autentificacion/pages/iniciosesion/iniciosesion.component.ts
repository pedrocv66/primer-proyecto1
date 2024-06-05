import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
hide=true;

constructor(){
  this.coleccionUsuariosLocales = [
  {}
  ]
}

usuarios: Usuario = {
  uid:'',
  nombre:'',
  apellido:'',
  email:'',
  password:'',
}
}
