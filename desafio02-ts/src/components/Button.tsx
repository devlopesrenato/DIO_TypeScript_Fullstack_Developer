import { Button as ButtonChakra } from '@chakra-ui/react'
interface ButtonProps {
    onClick: () => void,
    title: string
}

export const Button = (props: ButtonProps) => {
    return (
        <ButtonChakra
            onClick={() => props.onClick()}
            colorScheme='teal'
            size='sm'
            width='100%'
            marginTop='5'
        >
            {props.title}
        </ButtonChakra>
    )
}