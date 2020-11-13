import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FormularioComponent,
    BienvenidaComponent,
    IniciarsesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
