import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from 'react';
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' alignItems='center' justifyContent='space-between' display='flex' flexDirection='column' backgroundColor='#9413dc' >
        <Header />
        {children}
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
