import express, { Request, Response } from 'express';
import { router } from './routes';

const server = express();
server.use(express.json())
server.use(router)

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'DioBank API is Running' })
})

const port = 5000;
server.listen(port, () => console.log(`Server running at http://localhost:${port}`))
