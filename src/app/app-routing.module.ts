import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RegisterComponent } from './components/register/register.component';
import { IniciarsesionComponent } from "./components/iniciarsesion/iniciarsesion.component";

const routes: Routes = [
  {
    path: '',
    component: BienvenidaComponent,
    pathMatch: 'full'
      
  },
  {
    path: 'login',
    component: IniciarsesionComponent
  },
  {
    path: 'register',
    component: RegisterComponent
    
  },
  {
    path: 'form',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
