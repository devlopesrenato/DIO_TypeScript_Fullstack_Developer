import { Box, Text } from "@chakra-ui/react";

interface IcardInfo {
    title: string,
    content: string,
}

const CardInfo = ({ title, content }: IcardInfo) => {
    return (
        <Box
            backgroundColor='white'
            minHeight='120px'
            padding={8}
            borderRadius='25px'
        >
            <Text fontSize='2xl' fontWeight='bold'>{title}</Text>
            <Text fontSize='xl' >{content}</Text>
        </Box>
    )
}

export default CardInfo;