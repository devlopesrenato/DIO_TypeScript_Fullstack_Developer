import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import CardInfo from "../components/CardInfo";

const Conta = () => {
  const navigate = useNavigate()
  const { loadingData, user, isLoggedIn } = useContext(AppContext)

  const { id } = useParams()
  if (user !== null && id !== user.id) {
    navigate('/')
  }

  useEffect(() => {
    if (!isLoggedIn && !loadingData) {
      navigate('/')
    }
  }, [isLoggedIn, loadingData, navigate])

  const date = new Date()
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const currentDate = `${date.toLocaleDateString()} ${hours}:${minutes}`

  console.log(loadingData)
  return !user ? (
    <Center flex='1' mt={30} mb={20}>
      <Spinner size='xl' color="#FFF" />
    </Center>
  )
    : (<>
      <Center flex='1' mt={30} mb={20} >
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
          {
            loadingData ?
              (
                <Center>
                  <Spinner size='xl' color="#FFF" />
                </Center>
              )
              : (
                <>
                  <CardInfo title={`Bem vindo(a) ${user?.name}`} content={currentDate} />
                  <CardInfo title="Informações da conta:" content={`Saldo: ${user?.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`} />
                </>
              )
          }
        </SimpleGrid>
      </Center>
    </>
    )
}

export default Conta;