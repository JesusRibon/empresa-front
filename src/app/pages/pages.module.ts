import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroConductorComponent } from './registro-conductor/registro-conductor.component';
import { RegistroCamionComponent } from './registro-camion/registro-camion.component';
import { TablaConductorComponent } from './tabla-conductor/tabla-conductor.component';

const routers: Routes =[
  {
    path: '',
    component: InicioComponent
  },
  {
    path:'registro-conductor',
    component: RegistroConductorComponent
  },
  {
    path: 'registro-camion',
    component: RegistroCamionComponent
  },
  {
    path: 'tabla-conductor',
    component: TablaConductorComponent
  }
]

@NgModule({
  declarations: [
    InicioComponent,
    RegistroConductorComponent,
    RegistroCamionComponent,
    TablaConductorComponent
  ],
  imports: [
    CommonModule , RouterModule.forChild(routers) , FormsModule
  ]
})
export class PagesModule { }
