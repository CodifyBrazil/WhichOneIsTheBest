import { Box, Flex } from "@chakra-ui/react";
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
    const [userProfileImage, setUserProfileImage] = useState('');
    const { getAllInfo } = useContext(Context);
    const {username} = useParams();

    const getInfoProfile = async () => {
        const data = await getAllInfo({username});
        const images = data.map(item=> {
            const urlImage = item.urls.small;
            const like = item.likes;
            const userProfileImage = item.user.profile_image.small;
            return {urlImage, like, userProfileImage}
        });
        setPhotos(images);
        setUserProfileImage(photos[0].userProfileImage);
    }
    
   
    return (
        <Box>
            <Header user={`${username}`} userImage={userProfileImage}/>
            
            <Flex wrap={'wrap'} bg='#fafafa'>
                {photos.map((item, index)=>(<ImagePost urlImage={item.urlImage} likes={item.like} key={index}/>))}
            </Flex>
        </Box>
    )
}