import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConsultaCpfService } from 'src/app/services/consulta-cpf.service';
import { DialogSimpleComponent } from 'src/app/shared/components/dialog-simple/dialog-simple.component';
import { ContaAplicacao } from 'src/app/shared/models/conta-aplicacao';
import { ContaCorrente } from 'src/app/shared/models/conta-corrente';
import { SituacaoCadastral } from 'src/app/shared/models/situacao-cadastral';
import { CommonValidator } from 'src/app/shared/validators/cpfValidator';

@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.css']
})
export class ConsultaCpfComponent implements OnInit, AfterViewInit {

  public formCpf!: FormGroup;
  public flagButton = false;
  public titleDesc = "NOVA ADMISSÃO COOPERADO";
  public subTitleDesc = "Cadastro / Admissão do Cooperado / Nova Admissão de Cooperado";
  public cpfFinded: SituacaoCadastral = new SituacaoCadastral;
  public contaAplicacao!: ContaAplicacao;
  public contaCorrente!: ContaCorrente;

  constructor(private cpfService: ConsultaCpfService, private formBuilder: FormBuilder, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formCpf = this.formBuilder.group({
      cpf:[
        '',
          Validators.compose([Validators.maxLength(11), Validators.required, CommonValidator.ValidaCpf])
      ]
    })
  }

  onSubmit() {
    let valueInputed = this.formCpf.get('cpf')?.value;
    if (valueInputed.toString().length == 10) {
      valueInputed = '0' + valueInputed; 
    }
    this.loadData(valueInputed);
    this.flagButton = true;
  }

  get cpf() {
    return this.formCpf.get('cpf');
  }


  loadData(cpf:any) {
    const allCpfs = this.cpfService.getAllCpfs();
    const cpfFinded = allCpfs.find(find => find?.cpf == cpf);
    if (cpfFinded !== undefined) {
      this.contaAplicacao = new ContaAplicacao();
      this.contaCorrente = new ContaCorrente();
      this.cpfFinded.setCpf(cpfFinded!.cpf);
      this.cpfFinded.setName(cpfFinded!.name);
      this.cpfFinded.setSituation(cpfFinded!.situation);
      this.contaAplicacao.setAccountnumber(cpfFinded!.contaAplicacao.accountNumber);
      this.contaCorrente.setAccountnumber(cpfFinded!.contaCorrente.accountNumber);
      this.cpfFinded.setContaAplicacao(this.contaAplicacao);
      this.cpfFinded.setContaCorrente(this.contaCorrente);
      this.cpfService.setDataCpf(this.cpfFinded);
      this.router.navigate(['consulta/detalhes']);
    } else {
      this.openDialog();
      this.router.navigate(['consulta']);
    }
  }

  openDialog() {
    this.dialog.open(DialogSimpleComponent);
  }


  ngAfterViewInit() { }


}
