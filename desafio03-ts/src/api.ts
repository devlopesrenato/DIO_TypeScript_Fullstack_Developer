
interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const conta: UserData = {
    email: 'renato@dio.me',
    password: '123',
    name: 'Renato Lopes',
    balance: 2000,
    id: '1'
}

export const api = new Promise<UserData>((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
