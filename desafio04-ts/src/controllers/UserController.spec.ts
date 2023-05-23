import { Request } from 'express';
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserService } from '../services/UserService';
import { UserController } from "./UserController";

describe.only('UserController', () => {
    const db = [
        {
            name: 'Joana',
            email: 'joana@dio.com',
        }
    ];

    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn().mockImplementation(() => db),
        deleteUser: jest.fn()
    }

    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Renato',
                email: 'renato@dio.me'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado.' })
    })

    it('Deve retornar um erro caso seja enviado um novo usuário sem a propriedade name', () => {
        const mockRequest = {
            body: {
                email: 'renato.lopes@dio.me',
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name obrigatório' })
    })

    it('Deve chamar a função getAllUsers e retornar os usuários', async () => {
        const mockRequest = {} as Request;
        const mockResponse = makeMockResponse();

        userController.getAllUsers(mockRequest, mockResponse);

        expect(mockUserService.getAllUsers).toHaveBeenCalled();
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toEqual([{ name: 'Joana', email: 'joana@dio.com' }]);
    });

    it('Deve deletar um usuário', () => {
        const mockRequest = {
            body: {
                name: 'Joana'
            }
        } as Request;
        const mockResponse = makeMockResponse();

        userController.deleteUser(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário deletado' });
    });

    it('Deve retornar um erro ao tentar deletar um usuário inexistente', () => {
        const mockRequest = {
            body: {
                name: 'Maria'
            }
        } as Request;
        const mockResponse = makeMockResponse();

        userController.deleteUser(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário não encontrado.' });
    });

    it('Deve retornar um erro ao tentar deletar um usuário sem enviar os parametros', () => {
        const mockRequest = {
            body: {}
        } as Request;
        const mockResponse = makeMockResponse();

        userController.deleteUser(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name ou email deve ser enviado.' });
    });
})
