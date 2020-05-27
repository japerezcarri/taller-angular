import {Routes,RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import { InicioComponent } from './components/inicio/inicio.component';
import { AgendarComponent } from './components/agendar/agendar.component';
import { AgendadasComponent } from './components/agendadas/agendadas.component';
import { CerrarComponent } from './components/cerrar/cerrar.component';
import { AutorizacionesComponent } from './components/autorizaciones/autorizaciones.component';


//relacion de rutas
const routes:Routes=[
    {path:'',component: InicioComponent},
    {path:'agendar', component: AgendarComponent},
    {path:'agendadas',component: AgendadasComponent},
    {path:'cerrar',component: CerrarComponent},
    {path:'autorizaciones',component: AutorizacionesComponent}
]

//Configuracion de decorador
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}