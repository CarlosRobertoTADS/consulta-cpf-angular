export class ContaCorrente {
  private accountNumber?: number;

  constructor(accountNumber?: number) {
    this.accountNumber = accountNumber;
  }

   getAccountnumber() {
   return this.accountNumber;
  }

   setAccountnumber(accountNumber: number) {
    this.accountNumber = accountNumber;
  }
}