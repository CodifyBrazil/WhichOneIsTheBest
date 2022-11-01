import { Box, Button, Flex, Spinner, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import {ImagePost} from "./components/Image";
import { ImagesUserProfile } from '../../types/types';
import { Header } from "./components/Header";

export const User = () => {
    useEffect(()=> {
        getInfoProfile();
    }, []);

    const [photos, setPhotos] = useState<ImagesUserProfile[]>([]);
    const [userProfileImage, setUserProfileImage] = useState<string>('');
    const [quantImage, setQuantImage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const { getAllInfo } = useContext(Context);
    const {username} = useParams();

    const getInfoProfile = async () => {
        setLoading(true);
        const data = await getAllInfo({username});
        setUserProfileImage(data[0].user.profile_image.small);
        const images = data.map(item=> {
            const urlImage = item.urls.regular;
            const like = item.likes;
            const userProfileImage = item.user.profile_image.small;
            const download_link = item.links.download;
            return {urlImage, like, userProfileImage, download_link}
        });
        setPhotos(images);
        setLoading(false);
        setQuantImage(images.length)
        
    }
    
   
    return (
        <Box>
            <Header user={`${username}`} quantImages={quantImage} userImage={userProfileImage}/>
            {loading&&
            <Flex justifyContent={'center'} >
                <Spinner 
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'/>
            </Flex>
            
            }
            
            <Flex wrap={'wrap'} bg='#fafafa'>
                {photos.map((item, index)=>(<ImagePost urlImage={item.urlImage} likes={item.like}  key={index}/>))}
                {quantImage > 28 &&
                <Flex justifyContent={'center'} m='auto' mt='10px' marginBottom={'30px'}>
                    <Button bg={'twitter.400'}>Carregar mais ...</Button>
                </Flex>}
            </Flex>
            
        </Box>
    )
}