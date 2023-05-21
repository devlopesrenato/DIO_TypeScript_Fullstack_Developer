import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        const email: string = 'renatolopes37@gmail.com'
        login(email)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a)! \n ${email}`)
    })

    it('Deve exibir um alert solicitando o preencimento dos campos', () => {
        login('')
        expect(mockAlert).toHaveBeenCalledWith('Informe seus dados de login.')

    })
})