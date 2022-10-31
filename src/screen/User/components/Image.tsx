import { Box, Image, Flex, Text } from "@chakra-ui/react";
import '../style.css';
import Heart from '../../../assets/love.png';

type ImageType = {
    urlImage: string;
    likes?: number;
}

export const ImagePost = ({urlImage, likes}: ImageType) => {
    return (
        <Box
        className='scale'
        w={'100wh'}
        h='100%'
        borderRadius={'4px'}
        margin='auto'>

            <Flex h={'300px'} bg='#fff' boxShadow={'xl'}>
                <Image  
                src={urlImage}
                objectFit='cover' 
                width={'190px'} 
                h='300px'
                m='auto'/>
                <Box 
                display={'flex'} 
                pos='absolute' 
                flexDirection='column' 
                justifyContent={'center'}  
                mt='4px'
                // bg='whiteAlpha.500'
                w={'188px'}
                h='50px'
                top={'247px'}
                // backdropFilter={'blur(5px)'} 
                >
                    <Flex w='50px' flexDirection={'column'} alignItems='center'>
                        <Image src={Heart} w='25px' ml={'10px'}/>
                        <Text fontSize='12px' bg={'#f74d5f'} w='30px' textAlign={'center'} borderRadius='4px' color={'#fff'} fontWeight={'bold'} fontFamily='monospace' ml={'12px'}>{likes}</Text>
                    </Flex>
                    
                </Box>
            </Flex>
            
        </Box>
    )
}