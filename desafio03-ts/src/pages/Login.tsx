import { Box, Center, Input, Spinner, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Button } from '../components/Button';
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassowrd] = useState<string>('')

    const { setIsLoggedIn, loadingData, isLoggedIn } = useContext(AppContext)

    const validateUser = async () => {
        if (email === '') {
            return alert('Email inválido')
        } else if (password === '') {
            return alert('Senha inválida')
        }

        const loggedIn = await login(email, password)

        if (!loggedIn) {
            return alert('Credenciais inválidas.')
        }

        setIsLoggedIn(true)
        changeLocalStorage({
            login: true,
            userData: {
                email,
                password
            }
        })

        navigate('/conta/1')
    }


    useEffect(() => {
        if (isLoggedIn && !loadingData) {
            navigate('/conta/1')
        }
    }, [isLoggedIn, loadingData, navigate])

    return loadingData ? (
        <Center flex='1' mt={30} mb={20}>
            <Spinner size='xl' color="#FFF" />
        </Center>
    )
        : (
            <Center flex='1' mt={30} mb={20} >
                <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15' width='100%' maxWidth={'350px'}>
                    <Center mb='5'>
                        <Text fontSize={25}>Login</Text>
                    </Center>
                    <Input mb='5' placeholder="E-mail" value={email} onChange={({ target }) => setEmail(target.value)} />
                    <Input mb='5' placeholder="Senha" type='password' value={password} onChange={({ target }) => setPassowrd(target.value)} />
                    <Center mb='5' >
                        <Button
                            title='Entrar'
                            onClick={() => validateUser()}
                        />
                    </Center>
                </Box>
            </Center>
        )
}

export default Login;