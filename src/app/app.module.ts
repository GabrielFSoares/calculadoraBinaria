import { HistoricoService } from './services/historico.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { TopnavComponent } from './components/nav/topnav/topnav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/nav/menu/menu.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    TopnavComponent,
    MenuComponent,
    HistoricoComponent,
    IntegrantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [HistoricoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
