import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import Lottie from "react-lottie";

import { Context } from '../context/Context';
import {PostPhoto} from '../types/types';

import Heart_Salve from '../assets/love.png';
import Like from '../assets/like.png';
import Heart from '../assets/heart.png';
import Close from '../assets/close1.png';
import HeartAnimattion from '../assets/heart-animation.json';
import { ImagePostHome } from "./ImagePostHome";


let photos: PostPhoto[] = [];

export const Post = () => {

    const { getAllInfo } = useContext(Context);

    useEffect(()=> {
        nextImage();
    }, [])

    const [numberImage, setNumberImage] = useState<number>(0);
    const [page, setPage] = useState<number>(0)
    const [image, setImage] = useState<PostPhoto>();
    const [displayAnimation, setDisplayAnimation] = useState<'none'|'initial'>('none');

    const randonClickJoinImage = () => {
        setDisplayAnimation('initial')
        setTimeout(() => {
            setDisplayAnimation('none');
        },2000);
    }
    

    const nextImage = async (voting?: number) => {
        
        if(numberImage < 27 && photos.length > 20){
            randonClickJoinImage();            
            setNumberImage(numberImage+1);
        }
        else {
            setPage(page+1);
            setNumberImage(0);
            const data = await getAllInfo(page);
            photos = data.map((item)=> {
                const username = item.user.username;
                const userImage = item.user.profile_image.medium;
                const idUser = item.user.id;
                const photoImage = item.urls.full;
                const likes = item.likes
                return {username, userImage, idUser, likes, photoImage}
            });            
        }
        
        setImage(photos[numberImage]);
                
    }

    return (
        <>
        <Box width={'100%'} h='100vh'>
        
            <Image 
            w={'100%'}
            h='100vh'
            src={`${image?.photoImage}`}
            objectFit={'cover'}/>

            <Flex
            display={displayAnimation}
            pos={'absolute'}
            zIndex={'999'}
            marginTop='-450px'
            
            >
                <Lottie
                    options={{
                        loop: true,
                        autoplay: false,
                        animationData: HeartAnimattion
                    }}
                    height={"5%"}
                    width={"40%"}
                    style={{marginLeft: '30px'}}
                    isStopped={displayAnimation==='none'}
                    isPaused={false}
                    />
            </Flex>
        </Box>

        <Flex 
        flexDirection={'column'}
        bg={'blackAlpha.600'} 
        w='70px' 
        pos='absolute' 
        mt='-400px' 
        ml='80%'
        borderRadius={'40px'}
        alignItems={'center'}>

            <ImagePostHome icon={image?.userImage} colorBorder='#04e5f9'/>
            <ImagePostHome icon={Like} likes={image?.likes} colorBorder='#3bef7a'/>
            <ImagePostHome icon={Heart}/>        
            
            
        </Flex>
        

        <Box pos={'absolute'} bgGradient='linear(to-t, #111 20%, transparent 70%)' w='100%' h='150px' mt='-150px' display={'flex'} alignItems='center' justifyContent={'space-around'}>
            <Button 
            onClick={(e)=> nextImage(0)} 
            borderRadius={'100%'} 
            w='70px' h='70px'>
                
                <img src={Heart} alt="heart" width={'100px'}/>
                </Button>

            <Button 
            onClick={(e)=> nextImage(1)} 
            borderRadius={'100%'} 
            w='70px' 
            h='70px'>
                <img src={Close} alt="close" width={'30px'}/>
                </Button>
        </Box>
        </>
    )
}