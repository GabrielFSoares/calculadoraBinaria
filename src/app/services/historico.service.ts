import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HistoricoService {

  historico:string[] = [];

  constructor() {
    let id:number = parseInt(localStorage.getItem('id'));
    let param = localStorage.getItem('id');

    if (param === null) {
      localStorage.setItem('id', '0');
    } else if (id !== 0) {
      for (let i = 1; i <= id ; i++) {
        let x = i.toString();
        this.historico.push(localStorage.getItem(x));
      }
    }
  }

  setHistorico(historico) {
    let id = this.getProximoId();
    localStorage.setItem('' + id, historico);
    localStorage.setItem('id', '' + id);

    this.historico.push(historico);
  }

  getHistorico() {
    return this.historico;
  }

  getProximoId() {
    let proximoId = localStorage.getItem('id');
    return parseInt(proximoId) + 1;
  }

  limparHistorico() {
    let id = parseInt(localStorage.getItem('id'));

    for (let i = 0; i <= id; i++) {
      let x = i.toString();
      localStorage.removeItem(x);
    }
    this.historico = [];
    localStorage.setItem('id', '0');
  }
}
