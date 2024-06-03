import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ARCHIVO DE RUTAS HIJAS
import { AutentificacionRoutingModule } from './autentificacion-routing.module';

// VISTAS DE AUTENTIFICACIÓN
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';

//componentes de material
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

//angular
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    //angular
    FormsModule,
    
  ],
  exports: [
    RegistroComponent,
    IniciosesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    
  ]
})
export class AutentificacionModule { }
