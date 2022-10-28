import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import ArrowLeft from '../../../assets/arrow.png';

type Props = {
    user: string;
    userImage?: string;
}

export const Header = ({user, userImage}: Props) => {
    return (
        <Flex bg='blackAlpha.800' justifyContent={'space-between'} h='50px' alignItems={'center'}>
            <Box ml={'7px'} borderRadius={'full'}>
                <Button 
                onClick={() => history.go(-1)}
                bg='whiteAlpha.900'
                >
                <Image src={ArrowLeft} w='17px' borderRadius={'full'}/>
                </Button>            
            </Box>
            <Flex alignItems={'center'} mr='7px'>
                <Text textColor={'#fff'} mr='7px' fontWeight='bold'>{user}</Text>
                <Image src={userImage} borderRadius='full' border={'2px solid #fff'}/>
            </Flex>
            
        </Flex>
    )
}