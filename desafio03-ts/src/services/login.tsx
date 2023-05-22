import { api } from "../api"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}


export const login = async (email: string, password: string): Promise<undefined | UserData> => {
    const data: any = await api
    if (email !== data.email || password !== data.password) {
        return undefined
    }

    return data
}
