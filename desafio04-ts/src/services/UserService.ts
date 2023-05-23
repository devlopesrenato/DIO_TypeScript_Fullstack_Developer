export interface User {
    name: string
    email: string
}

const db: User[] = [
    {
        name: 'Joana',
        email: 'joana@dio.com',
    }
]

export class UserService {
    db: User[]

    constructor(
        database = db
    ) {
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }

    deleteUser = (userToDelete: User) => {
        this.db = this.db.filter(user => user !== userToDelete)
        console.log('Usuário deletado - DB atualizado', this.db)
    }
}
