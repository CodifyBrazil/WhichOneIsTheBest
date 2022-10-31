import { Box, Image } from "@chakra-ui/react";

export const Header = () => {

    return (
        <Box 
        justifyContent={'flex-end'} 
        alignItems='center'
        pos={'absolute'}
        w={{base:'100%', md:'40%'}} 
        h='50px' 
        bg={'transparent'} 
        opacity={''} 
        display={'flex'}> 
            <Image 
            boxSize={'40px'} 
            objectFit='cover' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvVtjXkqt6qMUIFbUBjvFNlIs2oL4P_xVqA&usqp=CAU' 
            borderRadius={'full'}
            marginRight='20px'
            border='3px solid #3bef7a'/>
        </Box>
    )
}