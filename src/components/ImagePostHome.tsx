import { Box, Image,  Text } from "@chakra-ui/react"

type Props = {
    icon?: string;
    colorBorder?: string;
    likes?: number;
}

export const ImagePostHome = ({icon, colorBorder, likes}: Props) => {
    return (
        <Box display={'flex'} flexDirection='column' alignItems={'center'}>
            <Image 
            borderRadius={'full'}
            border={`2px solid ${colorBorder}`}
            w={'50px'}
            h='50px'
            marginTop={'10px'}
            src={`${icon}`}
        />
            <Text marginTop={'10px'} fontWeight={'bold'} fontSize='14px' color='#fff'>{likes}</Text>

        </Box>
    )
}