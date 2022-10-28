import { Box, Image, Flex, Text } from "@chakra-ui/react";
import '../style.css';
import Heart from '../../../assets/heart.png';

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

            <Flex h={'300px'} alignItems='center' bg='#fff' boxShadow={'xl'} flexDirection='column'>
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
                backdropFilter={'blur(5px)'}>
                    <Image src={Heart} w='20px' ml={'10px'}/>
                    <Text fontSize='13px' color={'#fff'} fontWeight={'bold'} ml={'12px'}>{likes}</Text>
                </Box>
            </Flex>
            
        </Box>
    )
}