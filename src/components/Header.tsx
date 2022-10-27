import { Box, Image } from "@chakra-ui/react";

export const Header = () => {

    return (
        <Box 
        justifyContent={'flex-end'} 
        alignItems='center'
        pos={'absolute'}
        w={'100%'} 
        h='50px' 
        bg={'#111111'} 
        opacity={'0.1'} 
        _hover={{opacity:'.8'}} 
        transition='all 0.4s ease'
        display={'flex'}> 
            <Image 
            boxSize={'40px'} 
            objectFit='cover' 
            src='https://bit.ly/dan-abramov' 
            borderRadius={'full'}
            marginRight='20px'
            border='3px solid #3aabfc'/>
        </Box>
    )
}