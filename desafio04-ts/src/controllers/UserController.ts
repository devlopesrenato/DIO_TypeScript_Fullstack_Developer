import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ) {
        this.userService = userService
    }

    createUser = (request: Request, response: Response): Response => {
        const user = request.body

        if (!user.name) {
            return response.status(400).json({ message: 'Bad request! Name obrigatório' })
        }

        this.userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'Usuário criado.' })
    }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers()
        return response.status(200).json(users)
    }

    deleteUser = (request: Request, response: Response): Response => {
        const userToDelete = request.body
        if (!userToDelete.name && !userToDelete.email) {
            return response.status(400).json({ message: 'Bad request! Name ou email deve ser enviado.' })
        }

        const prop = userToDelete.name ? 'name' : 'email'
        const users = this.userService.getAllUsers()
        const userDelete = users.filter(user => user[prop] === (userToDelete.name || userToDelete.email));
        if (!userDelete.length) {
            return response.status(400).json({ message: 'Usuário não encontrado.' })
        }

        const resp = this.userService.deleteUser(userDelete[0])
        return response.status(200).json({ message: 'Usuário deletado' })
    }
}
