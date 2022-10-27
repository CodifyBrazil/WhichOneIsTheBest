import { Box, Image, Flex } from "@chakra-ui/react";

type ImageType = {
    urlImage: string;
}

export const ImagePost = ({urlImage}: {urlImage: string}) => {
    return (
        <Box
        w={'100wh'}
        h='100%'
        border={'1px solid #ccc'}
        borderRadius={'4px'}
        margin='auto'>
            <Flex>
                <Image  src={urlImage} w='130px' borderRadius={'4px'}/>
            </Flex>
            
        </Box>
    )
}