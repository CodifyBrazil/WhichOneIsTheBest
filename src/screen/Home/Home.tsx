import { Box } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Post } from "./components/Post";
import { isLocalStorage } from '../../utils/localStore';


import { useState } from "react";

export const Home = () => {

    return (
        <Box w={{base: '100%', md:'40%'}}>
            <Header />
            <Post />
        </Box>
    )
}


// {{ base: '24px', md: '40px', lg: '56px' }}