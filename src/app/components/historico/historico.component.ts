import { HistoricoService } from '../../services/historico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  historico:string[] = [];

  constructor(private historicoService: HistoricoService) { }

  ngOnInit() {
    if (localStorage.getItem('id') == '0') {
      this.historico = ['Histórico vazio'];
    } else {
      this.historico = this.historicoService.getHistorico();
    }
  }

  limparHistorico() {
    this.historicoService.limparHistorico();

    this.ngOnInit();
  }
}
