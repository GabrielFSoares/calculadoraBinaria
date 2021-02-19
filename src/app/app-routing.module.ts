import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CalculadoraComponent },
  { path: 'calculadora', component: CalculadoraComponent},
  { path: 'historico', component: HistoricoComponent },
  { path: 'integrantes', component: IntegrantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
