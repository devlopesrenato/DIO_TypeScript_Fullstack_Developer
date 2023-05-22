import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";
const navigate = useNavigate()

const Usuario = () => {
  const { loadingData, user, isLoggedIn } = useContext(AppContext)


  const { id } = useParams()
  if (user && id !== user.id) {
    navigate('/')
  }

  useEffect(() => {
    if (!isLoggedIn && !loadingData) {
      navigate('/')
    }
  }, [isLoggedIn, loadingData])

  return loadingData ? (
    <Center flex='1' mt={30} mb={20}>
      <Spinner size='xl' color="#FFF" />
    </Center>
  )
    : (<>
      <Center flex='1' mt={30} mb={20} >
        <Box
          backgroundColor='white'
          minHeight='120px'
          padding={8}
          borderRadius='25px'
        >
          <Text fontSize='2xl' fontWeight='bold'>{user?.name}</Text>
          <Text fontSize='xl' >E-mail: {user?.email}</Text>
        </Box>
      </Center>
    </>
    )
}

export default Usuario;