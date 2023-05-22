import { Box, Center } from "@chakra-ui/react"

export const Footer = () => {
  return (
    <Box bg="#1e192c" py='1' width='100vw' mt='15px' position='fixed'
      bottom={0}
      left={0}
    >
      <Center color="white" px='4'>
        <h1><a href="https://github.com/devlopesrenato"  target="_blank">{'<devLopesRenato />'}</a></h1>
      </Center>
    </Box>
  )
}