import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingsAccount } from './class/SavingsAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log('Conta Pessoal:')
peopleAccount.deposit(500.5)
peopleAccount.withdraw(500.6)
peopleAccount.withdraw(500)
peopleAccount.getBalance();
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log('\n Conta Empresarial:')
companyAccount.deposit(350.75)
companyAccount.withdraw(50)
companyAccount.getLoan(1000)
companyAccount.withdraw(2000)
companyAccount.withdraw(1500)
peopleAccount.getBalance();
const savingsAccount: SavingsAccount = new SavingsAccount('Renato', 30)
console.log('\n Conta Poupança:')
savingsAccount.deposit(100)
savingsAccount.withdraw(150)
savingsAccount.withdraw(100)
peopleAccount.getBalance();
