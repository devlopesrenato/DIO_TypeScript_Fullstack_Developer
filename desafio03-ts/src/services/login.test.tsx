import { login } from "./login"

describe('login', () => {

    const mockEmail = 'renato@dio.me'
    const mockPassword = '123'
    it('Deve retornar true caso o email e a senha sejam válidos', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve retornar false caso o email esteja errado', async () => {
        const response = await login('email@invalido.com', mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve retornar false caso a senha esteja errada', async () => {
        const response = await login(mockEmail, 'senha-invalida')
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email e a senha sejam inválidos', async () => {
        const response = await login('email@invalido.com', 'senha-invalida')
        expect(response).toBeFalsy()
    })
})