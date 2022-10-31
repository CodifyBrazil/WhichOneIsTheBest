import { Box, Button, Flex, Image, useToast } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import Lottie from "react-lottie";
import Cookie from 'universal-cookie';

import { Context } from '../../../context/Context';
import { MenuPostPhoto } from '../../../types/types';
import { isLocalStorage } from '../../../utils/localStore';

import Like from '../../../assets/love.png';
import Heart from '../../../assets/heart.png';
// import Save from '../../../assets/archive.png';
import Close from '../../../assets/close1.png';
import HeartAnimattion from '../../../assets/heart-animation.json';
import { MenuPostHome } from "./MenuPostHome";


let photos: MenuPostPhoto[] = [];
const cookie = new Cookie;
isLocalStorage({});
export const Post = () => {
    

    const toast = useToast();

    const { getAllInfo } = useContext(Context);

    useEffect(()=> {
        nextImage({});
    }, []);

    const {valuePhoto, pagePhoto} = cookie.get('dataUser');
    

    const [numberImage, setNumberImage] = useState<number>(valuePhoto);
    const [page, setPage] = useState<number>(pagePhoto);
    const [image, setImage] = useState<MenuPostPhoto>();
    const [displayAnimation, setDisplayAnimation] = useState<'none'|'initial'>('none');

    const randonClickJoinImage = () => {
        setDisplayAnimation('initial')
        setTimeout(() => {
            setDisplayAnimation('none');
        },2000);
    }

    const nextImage = async ({id, voting}:{id?:string, voting?: number}) => {
        
        if(numberImage < 27 && photos.length > 20){
            randonClickJoinImage();   
            setNumberImage(numberImage+1);
        }
        else {
            setPage(page+1);
            (valuePhoto!=0)?setNumberImage(0):setNumberImage(valuePhoto);            
            photos = [];
            const data = await getAllInfo({page});

            toast({
                title: 'Buscando novas fotos.',
                status: 'success',
                duration: 700,
                isClosable: true,
                position: "top"
              });
            
            photos = data.map((item)=> {
                const username = item.user.username;
                const userImage = item.user.profile_image.medium;
                const idUser = item.user.id;
                const photoImage = item.urls.regular;
                const likes = item.likes
                return {username, userImage, idUser, likes, photoImage}
            });            
        }
        setImage(photos[numberImage]);
                
    }

    isLocalStorage({ valuePhoto: numberImage, pagePhoto: page });

    return (
        <>
        <Box width={'100%'} h='100vh'>
        
            <Image 
            w={'100%'}
            h='100vh'
            src={`${image?.photoImage}`}
            objectFit={'cover'}/>

            {/* <Flex
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
            </Flex> */}
        </Box>

        <Flex 
        flexDirection={'column'}
        w='50px' 
        pos='absolute' 
        mt='-250px' 
        ml='82%'
        borderRadius={'40px'}
        alignItems={'center'}>

            <MenuPostHome icon={image?.userImage} colorBorder='#fff' username={image?.username}/>
            <MenuPostHome icon={Like} likes={image?.likes} />
            {/* <MenuPostHome icon={Save} />   */}
            
            
        </Flex>
        

        <Box pos={'absolute'} bgGradient='linear(to-t, #111 30%, transparent 80%)' w='100%' h='150px' mt='-150px' display={'flex'} alignItems='center' justifyContent={'space-around'}>
            <Button 
            onClick={(e)=> nextImage({voting:0})} 
            borderRadius={'100%'} 
            w='70px' h='70px'>
                
                <img src={Heart} alt="heart" width={'100px'}/>
                </Button>

            <Button 
            onClick={(e)=> nextImage({voting: 1})} 
            borderRadius={'100%'} 
            w='70px' 
            h='70px'>
                <img src={Close} alt="close" width={'30px'}/>
                </Button>
        </Box>
        </>
    )
}