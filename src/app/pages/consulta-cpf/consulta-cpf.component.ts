import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaCpfService } from 'src/app/services/consulta-cpf.service';
import { ContaAplicacao } from 'src/app/shared/models/conta-aplicacao';
import { ContaCorrente } from 'src/app/shared/models/conta-corrente';
import { SituacaoCadastral } from 'src/app/shared/models/situacao-cadastral';
import { CommonValidator } from 'src/app/shared/validators/cpfValidator';

@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.css']
})
export class ConsultaCpfComponent implements OnInit {

  public formCpf!: FormGroup;
 

  constructor(private formBuilder: FormBuilder, private router: Router ) { }

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
    this.router.navigate(['consulta/detalhes', valueInputed]);

  }

  get cpf() {
    return this.formCpf.get('cpf');
  }

}
