import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConsultaCpfService } from 'src/app/services/consulta-cpf.service';
import { ContaAplicacao } from 'src/app/shared/models/conta-aplicacao';
import { ContaCorrente } from 'src/app/shared/models/conta-corrente';
import { SituacaoCadastral } from 'src/app/shared/models/situacao-cadastral';

@Component({
  selector: 'app-detalhes-cpf',
  templateUrl: './detalhes-cpf.component.html',
  styleUrls: ['./detalhes-cpf.component.css']
})
export class DetalhesCpfComponent implements OnInit {
  public cpfFinded!: SituacaoCadastral;
  public contaAplicacao!: ContaAplicacao;
  public contaCorrente!: ContaCorrente;
  public requestParam: any;

  constructor(private cpfService: ConsultaCpfService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    this.requestParam = this.route.snapshot.paramMap.get('cpf');
    const allCpfs = this.cpfService.getAllCpfs();
    const cpfFinded = allCpfs.find(find => find?.cpf == this.requestParam);
    if (cpfFinded !== undefined) {
      this.contaAplicacao = new ContaAplicacao();
      this.contaCorrente = new ContaCorrente();
      this.cpfFinded = new SituacaoCadastral();
      this.cpfFinded.setCpf(cpfFinded!.cpf);
      this.cpfFinded.setName(cpfFinded!.name);
      this.cpfFinded.setSituation(cpfFinded!.situation);
      this.contaAplicacao.setAccountnumber(cpfFinded!.contaAplicacao.accountNumber);
      this.contaCorrente.setAccountnumber(cpfFinded!.contaCorrente.accountNumber);
      this.cpfFinded.setContaAplicacao(this.contaAplicacao);
      this.cpfFinded.setContaCorrente(this.contaCorrente)
      console.log(this.cpfFinded)
    } else {
      alert('Tente outro CPF');
      this.router.navigate(['consulta']);
    }
    
  }

}
