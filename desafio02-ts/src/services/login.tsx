export const login = (email: string): void => {
    if (email) {
        alert(`Bem vindo(a)! \n ${email}`)
    } else {
        alert('Informe seus dados de login.')
    }
}
