import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
//VISTA - PAGINAS
import { InicioComponent } from './pages/inicio/inicio.component';
//COMPONENTE LOCAL
import { CardComponent } from './components/card/card.component';
//COMPONENTES DE MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class InicioModule { }
