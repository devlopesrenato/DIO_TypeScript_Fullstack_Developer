import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { AppContext } from "../components/AppContext";
import CardInfo from "../components/CardInfo";

interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

const Conta = () => {
  const [userData, setUserData] = useState<UserData | null>()
  const { id } = useParams()
  const navigate = useNavigate()

  const { isLoggedIn } = useContext(AppContext)

  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data)
    }

    getData()
  })

  const date = new Date()
  const currentDate = `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`

  if (userData && id !== userData.id) {
    navigate('/')
  }

  return (<>
    <Box flex='1' height='auto' >
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
          {
            userData === undefined || userData === null ?
              (
                <Center>
                  <Spinner size='xl' color="#FFF" />
                </Center>
              )
              : (
                <>
                  <CardInfo title={`Bem vindo(a) ${userData?.name}`} content={currentDate} />
                  <CardInfo title="Informações da conta:" content={`Saldo: R$ ${userData?.balance}`} />
                </>
              )
          }
        </SimpleGrid>
      </Center>
    </Box>
  </>
  )
}

export default Conta;