import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";

const Usuario = () => {
  const { loadingData, user } = useContext(AppContext)
  const navigate = useNavigate()


  const { id } = useParams()
  if (user && id !== user.id) {
    navigate('/')
  }

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