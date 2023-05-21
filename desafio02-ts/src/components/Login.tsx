import { Box, Center, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { Button } from './Button'
interface LoginProps {
    onClickLogin: (email: string) => void,
    width?: string | number,
    maxWidth?: string | number
}

export const Login = ({ onClickLogin, width = '100%', maxWidth = undefined }: LoginProps) => {
    const [email, setEmail] = useState<string>('')
    return (
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15' width={width} maxWidth={maxWidth} >
            <Center mb='5'>
                <h1>Faça o login</h1>
            </Center>
            <Input mb='5' placeholder="E-mail" value={email} onChange={({ target }) => setEmail(target.value)} />
            <Input mb='5' placeholder="Senha" />
            <Center mb='5' >
                <Button
                    title='Entrar'
                    onClick={() => onClickLogin(email)}
                />
            </Center>
        </Box>
    )
}