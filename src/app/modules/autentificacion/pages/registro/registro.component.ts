import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

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
//########################################################################################################
constructor(
  public sericioAuth:AuthService,
  public servicioRutas:Router,
){}



//########################################################################################################
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

  const credenciales = {
    email: this.usuarios.email,
    password: this.usuarios.password,
  }
  const res = await this,servicioAuth.registrar(credenciales.email,credenciales.password)
 
  .then(res =>  {
   alert("se registro con exito")

  
  this.servicioRutas.navigate(['/inicio'])
  })
  .cath(error =>{
  alert("error en el registro: \n"+error)

  })
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
