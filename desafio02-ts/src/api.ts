const conta = {
    email: 'renato@dio.me',
    password: '123',
    name: 'Renato Lopes',
    balance: 2000
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})