import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from './vista/vista.component';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  {path: "vista", component:VistaComponent},
  {path: "", component:VistaComponent},
  {path:"",component: InicioComponent},
  {path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
