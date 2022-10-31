import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
    icon?: string;
    colorBorder?: string;
    likes?: number;
    username?: string
}

export const MenuPostHome = ({icon, colorBorder, username, likes}: Props) => {
    return (
        <Box display={'flex'} flexDirection='column' textAlign='center' alignItems={'center'}>
            <Link  to={(username?`/user/${username}`:'/')}>
                <Image 
                borderRadius={'full'}
                border={`2px solid ${colorBorder}`}
                w={'40px'}
                h='40px'
                marginTop={'10px'}
                src={`${icon}`}
            />
            <Box bg='#f74d5f' borderRadius={'5px'}>
                <Text color={'#fff'} fontSize='12px' fontWeight={'bold'} fontFamily='monospace'>{likes}</Text>
            </Box>
            </Link>

        </Box>
    )
}