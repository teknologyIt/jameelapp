import { NgModule } from '@angular/core';
import  { Routes ,RouterModule } from '@angular/router';
import { InscriptionComponent} from './inscription/inscription.component';
import {ContainerComponent} from './container/container.component';

 const routes : Routes =[
    { path :'' , redirectTo:'accueil', pathMatch:'full'},
    { path :'accueil' , component : ContainerComponent},
{ path :'inscription' , component : InscriptionComponent}



 ];
 @NgModule({
imports: [ RouterModule.forRoot(routes)
  ],
exports:[RouterModule]
 })
 export class AppRoutingModule{
 }
 export const routingComponent =[InscriptionComponent,ContainerComponent]