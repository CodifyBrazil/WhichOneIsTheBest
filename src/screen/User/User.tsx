import { Box, Button, Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import ArrowLeft from '../../assets/arrow.png';
import {ImagePost} from "./components/Image";

export const User = () => {
    useEffect(()=> {
        getInfoProfile();
    }, []);

    const [photos, setPhotos] = useState<string[]>([]);
    const { getAllInfo } = useContext(Context);
    const {username} = useParams();

    const getInfoProfile = async () => {
        const data = await getAllInfo({username});
        const images = data.map(item=> {return item.urls.full});
        setPhotos(images);
    }
    
   
    return (
        <Box>
            <Flex>
                <Button 
                onClick={() => history.go(-1)}
                borderRadius={'full'}
                >
                    <img src={ArrowLeft} width='17px'/>
                </Button>
                <h1>ola {username}</h1>
            </Flex>
            <Flex wrap={'wrap'} >
                {photos.map((item, index)=>(<ImagePost urlImage={item} key={index}/>))}
            </Flex>
        </Box>
    )
}