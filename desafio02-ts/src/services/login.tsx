import { api } from "../api";

export const login = async (email: string): Promise<void> => {
    if (email) {
        const data: any = await api;
        if (email !== data.email) {
            alert('Emai linválido.')
        } else {
            alert(`Bem vindo(a)! \n ${data.name}`)
        }
    } else {
        alert('Informe seus dados de login.')
    }
}
