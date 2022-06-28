import { ContaAplicacao } from "./conta-aplicacao";
import { ContaCorrente } from "./conta-corrente";

export class SituacaoCadastral {

  private name?: string;
  private situation?: string;
  private cpf?: number;
  private contaAplicacao?: ContaAplicacao;
  private contaCorrente?: ContaCorrente;


  constructor(name?:string, situation?:string, cpf?:number, contaAplicacao?:ContaAplicacao, contaCorrente?:ContaCorrente) {
    this.name = name;
    this.situation = situation;
    this.cpf = cpf;
    this.contaAplicacao = contaAplicacao;
    this.contaCorrente = contaCorrente;
  }

   getName(){
    return this.name;
  }

   setName(name: string) {
    this.name = name;
  }

   getSituation(){
    return this.situation;
  }

   setSituation(situation: string){
    this.situation = situation;
  }

   setCpf(cpf: number) {
    this.cpf = cpf;
  }

   getCpf(){
    return this.cpf;
  }

   getContaAplicacao(){
    return this.contaAplicacao;
  }

   setContaAplicacao(contaAplicacao: ContaAplicacao){
    this.contaAplicacao = contaAplicacao;
  }

   getContaCorrente(){
    return this.contaCorrente;
  }

   setContaCorrente(contaCorrente: ContaCorrente){
    this.contaCorrente = contaCorrente;
  }


}