import { Component, OnInit } from '@angular/core';
import { ConsultaCpfService } from 'src/app/services/consulta-cpf.service';
import { SituacaoCadastral } from 'src/app/shared/models/situacao-cadastral';

@Component({
  selector: 'app-detalhes-cpf',
  templateUrl: './detalhes-cpf.component.html',
  styleUrls: ['./detalhes-cpf.component.css']
})
export class DetalhesCpfComponent implements OnInit{
  dataCpf:SituacaoCadastral | undefined
  constructor(private consultaCpfService: ConsultaCpfService) { 
  }
    

  ngOnInit(): void {
    this.loadData();   
  }

  loadData() {
    this.consultaCpfService.atualizarDataCpf.subscribe(response => {
      this.dataCpf = response;
    })
    if (this.dataCpf == undefined) {
      this.dataCpf = this.consultaCpfService.getByCpf();
    }
  }




}
