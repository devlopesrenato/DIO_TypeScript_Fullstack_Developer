import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', async () => {
        const email: string = 'renato@dio.me'
        await login(email)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a)! \n Renato Lopes`)
    })

    it('Deve exibir um alert solicitando o preencimento dos campos', async () => {
        await login('')
        expect(mockAlert).toHaveBeenCalledWith('Informe seus dados de login.')
    })

    it('Deve exibir um erro ao inserir um email inválido', async () => {
        await login('teste@teste.com')
        expect(mockAlert).toHaveBeenCalledWith('Emai linválido.')
    })


})