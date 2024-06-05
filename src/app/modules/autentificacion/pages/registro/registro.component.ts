import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de la contraseña para ver los valores o no
hide = true;
//importar la interfaz de usuario -> inicializar
usuarios: Usuario = {
  uid:'',
  nombre:'',
  apellido:'',
  email:'',
  rol:'',
  password:'',
}
// creamos una collecion de usuarios, tipo 'usuario' para arrays
coleccionUsuarios: Usuario[] = [];
//funcion para el registro de nuevos usuarios
registrar(){
  //constante credencisles va a resguardar la informacion que ingrese el usuario
  const credenciales = {
  uid: this.usuarios.uid,
  nombre: this.usuarios.nombre,
  apellido: this.usuarios.apellido,
  email: this.usuarios.email,
  rol: this.usuarios.rol,
  password: this.usuarios.password,}

  this.coleccionUsuarios.push(credenciales);
  alert("¡te as registrado con exito!")

  console.log(credenciales);
  console.log (this.coleccionUsuarios);
 
}
limpiarInputs(){
  const inputs = {
    uid: this.usuarios.uid ='',
    nombre: this.usuarios.nombre ='',
    apellido: this.usuarios.apellido ='',
    email: this.usuarios.email ='',
    rol: this.usuarios.rol ='',
    password: this.usuarios.password =''
  }
}
}
