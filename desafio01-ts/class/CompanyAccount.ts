import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      const currentBalance = this.balance;
      this.balance = currentBalance + value + 10;
      const message = `Você pegou um empréstimo de ${this.formatBRLCurrency(value)}`
      const balance = this.formatBRLCurrency(this.balance)
      console.log({
        operation: `Empréstimo ${this.formatBRLCurrency(value)}`,
        accountHolder: this.getName(),
        account: this.getAccountNumer(),
        message,
        balance
      })
    } else {
      console.log({
        operation: `Empréstimo ${this.formatBRLCurrency(value)}`,
        accountHolder: this.getName(),
        account: this.getAccountNumer(),
        message: 'Conta inativa.',
        balance: this.formatBRLCurrency(this.balance)
      })
    }
  }
}
