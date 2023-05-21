export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
      const message = `Você depositou: ${this.formatBRLCurrency(value)}`
      const balance = this.formatBRLCurrency(this.balance)
      console.log({
        operation: `Depósito ${this.formatBRLCurrency(value)}`,
        accountHolder: this.name,
        account: this.accountNumber,
        message,
        balance
      })
    } else {
      console.log({
        operation: `Depósito ${this.formatBRLCurrency(value)}`,
        accountHolder: this.name,
        account: this.accountNumber,
        message: 'Conta inativa.',
        balance: this.formatBRLCurrency(this.balance)
      })
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance < value) {
        console.log({
          operation: `Saque ${this.formatBRLCurrency(value)}`,
          accountHolder: this.name,
          account: this.accountNumber,
          message: 'Saldo insuficiente.',
          balance: this.formatBRLCurrency(this.balance)
        })
      } else {
        this.balance -= value;
        console.log({
          operation: `Saque ${this.formatBRLCurrency(value)}`,
          accountHolder: this.name,
          account: this.accountNumber,
          message: `Você sacou: ${this.formatBRLCurrency(value)}`,
          balance: this.formatBRLCurrency(this.balance)
        })
      }
    } else {
      console.log({
        operation: `Saque ${this.formatBRLCurrency(value)}`,
        accountHolder: this.name,
        account: this.accountNumber,
        message: 'Conta inativa.',
        balance: this.formatBRLCurrency(this.balance)
      })
    }
  }

  getBalance = (): void => {
    console.log({
      operation: 'Obter saldo da conta',
      accountHolder: this.name,
      account: this.accountNumber,
      status: this.status ? 'Conta ativa.' : 'Conta inativa.',
      balance: this.formatBRLCurrency(this.balance)
    })
  }

  getAccountNumer = (): number => {
    return this.accountNumber
  }

  validateStatus = (): boolean => {
    return this.status
  }

  formatBRLCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
