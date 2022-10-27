import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
    icon?: string;
    colorBorder?: string;
    likes?: number;
    username?: string
}

export const MenuPostHome = ({icon, colorBorder, username}: Props) => {
    return (
        <Box display={'flex'} flexDirection='column' alignItems={'center'}>
            <Link  to={(username?`/user/${username}`:'')}>
                <Image 
                borderRadius={'full'}
                border={`2px solid ${colorBorder}`}
                w={'50px'}
                h='50px'
                marginTop={'10px'}
                src={`${icon}`}
            />
            </Link>

        </Box>
    )
}