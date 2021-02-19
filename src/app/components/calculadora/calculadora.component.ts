import { HistoricoService } from '../../services/historico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public resultado:string = '';

  constructor(private historicoService: HistoricoService) {
  }

  ngOnInit() {
  }

  clicar(valor) {
    if (valor === '+' && this.resultado.indexOf('+') === -1 && this.resultado !== '') {
        this.resultado += valor;
    } else if (valor !== '+') {
      this.resultado += valor;
    }
  }

  limpar() {
    this.resultado = '';
  }

  calcular() {
    let expressao:string = this.resultado;
    let numeros:string[] = this.resultado.split('+');

    if (numeros[1]) {
      let elevado:string = '0';
      let resultadoSoma:string[] = [];
      let binario1:string = numeros[0];
      let binario2:string = numeros[1];

      let principal:string = (binario1.length > binario2.length || binario1.length === binario2.length) ? binario1 : binario2;
      let secundario:string = (binario1.length < binario2.length) ? binario1 : binario2;

      let b1:string[] = principal.split("");
      let b2:string[] = secundario.split("");

      for (let i = 0; i < b1.length; i++) {
        if (b2[i] === undefined){
          b2.unshift('0');
        }
      }

      for (let i = b1.length - 1; i >= 0; i--) {
        if (b1[i] == elevado){
          b1[i] = '0';
        } else {
          b1[i] = '1';
          elevado = '0';
        }

        if (b1[i] != b2[i]) {
          resultadoSoma[i] = '1';
        } else if (b1[i] == '0' && b2[i] == '0') {
          resultadoSoma[i] = '0';
        } else if (b1[i] == '1' && b2[i] == '1') {
          elevado = '1';
          resultadoSoma[i] = '0';
        }

        if(i == 0 && elevado == '1') {
          resultadoSoma.unshift('1');
        }
      }

      this.resultado = resultadoSoma.join('');
      this.historicoService.setHistorico(expressao + ' = ' + this.resultado);

    } else {
      alert('Digite dois números binários');
    }
  }
}
