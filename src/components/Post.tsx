import { Box, Button, Flex, Image, useToast } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import Lottie from "react-lottie";

import { Context } from '../context/Context';

import Heart from '../assets/heart.png';
import Close from '../assets/close1.png';
import HeartAnimattion from '../assets/heart-animation.json';


let photos: string[] = [];

export const Post = () => {

    const { getAllInfo } = useContext(Context);

    useEffect(()=> {
        nextImage();
    }, [])

    const [numberImage, setNumberImage] = useState<number>(0);
    const [page, setPage] = useState<number>(0)
    const [image, setImage] = useState<string>('carregando');
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
            console.log(numberImage, 'nao buscou ... ');
        }
        else {
            setPage(page+1);
            setNumberImage(0);
            const data = await getAllInfo(page);
            photos = data.map((item)=> {
                return item.urls.full
            });            
            console.log(numberImage, 'buscou ... ', photos);
        }
        
        setImage(photos[numberImage]);
                
    }

    return (
        <>
        <Box width={'100%'} h='100vh'>
        
            <Image 
            w={'100%'}
            h='100vh'
            src={`${image}`}
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
                        animationData: HeartAnimattion,

                        // rendererSettings: {
                        // preserveAspectRatio: "xMidYMid slice",
                        // },
                    }}
                    height={"5%"}
                    width={"40%"}
                    style={{marginLeft: '30px'}}
                    isStopped={displayAnimation==='none'}
                    isPaused={false}
                    />
            </Flex>
        </Box>

        

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