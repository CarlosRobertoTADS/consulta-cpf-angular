import { EventEmitter, Injectable } from '@angular/core';
import { MockCPFS } from '../shared/mocks/cpfs';
import { SituacaoCadastral } from '../shared/models/situacao-cadastral';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCpfService {

  atualizarDataCpf = new EventEmitter<SituacaoCadastral>();
  dataCpf!: SituacaoCadastral;
    constructor() { }

  setDataCpf(dataCpf: SituacaoCadastral) {
    this.atualizarDataCpf.emit(dataCpf);
    this.dataCpf = dataCpf;
  }

  getAllCpfs() {
    return MockCPFS;
  }

  getByCpf() {
    return this.dataCpf;
  }
  
}
