import { DioAccount } from "./DioAccount";

export class SavingsAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      const depositAmount = value + 10;
      this.balance += depositAmount;
      const message = `Você depositou: ${this.formatBRLCurrency(value)}`
      const balance = this.formatBRLCurrency(this.balance)
      console.log({
        operation: `Depósito ${this.formatBRLCurrency(value)}`,
        accountHolder: this.getName(),
        account: this.getAccountNumer(),
        message,
        balance
      })
    } else {
      console.log({
        operation: `Depósito ${this.formatBRLCurrency(value)}`,
        accountHolder: this.getName(),
        account: this.getAccountNumer(),
        message: 'Conta inativa.',
        balance: this.formatBRLCurrency(this.balance)
      })
    }
  }

}