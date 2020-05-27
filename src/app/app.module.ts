import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgendarComponent } from './components/agendar/agendar.component';
import { AgendadasComponent } from './components/agendadas/agendadas.component';
import { CerrarComponent } from './components/cerrar/cerrar.component';
import { AutorizacionesComponent } from './components/autorizaciones/autorizaciones.component';

import{AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    InicioComponent,
    AgendarComponent,
    AgendadasComponent,
    CerrarComponent,
    AutorizacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
