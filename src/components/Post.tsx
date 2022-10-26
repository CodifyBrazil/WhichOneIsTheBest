import { Box, Button, Image, useToast } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";

import { Context } from '../context/Context';
import { ContextType } from '../types/types';

import Heart from '../assets/heart.png';
import Close from '../assets/close1.png';


let photos: string[] = [];

export const Post = () => {

    const { getAllInfo } = useContext(Context);
    const toast = useToast();

    useEffect(()=> {
        nextImage();
    }, [])

    const [numberImage, setNumberImage] = useState(0);
    const [image, setImage] = useState<string>('carregando');

    const nextImage = async () => {
        if(numberImage < 25 && photos.length > 20){
            toast({
                title:`Foto (${numberImage})`,
                position: 'top',
                variant: 'subtle',
                duration: 900,

            });
            console.log('nao requisitou servidor ...');
        }
        else{
            const data = await getAllInfo();      
            photos = data.map((item)=> {
                return item.urls.full
            });
            
            console.log('requisitou servidor ...');
        }
        console.log((numberImage < 25 && photos.length > 20?true:false));
        setNumberImage(numberImage+1);
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
        </Box>

        <Box pos={'absolute'} bgGradient='linear(to-t, #111 20%, transparent 70%)' w='100%' h='150px' mt='-150px' display={'flex'} alignItems='center' justifyContent={'space-around'}>
            <Button 
            onClick={nextImage} 
            borderRadius={'100%'} 
            w='70px' h='70px'>
                <img src={Heart} alt="heart" width={'100px'}/>
                </Button>

            <Button 
            onClick={nextImage} 
            borderRadius={'100%'} 
            w='70px' 
            h='70px'>
                <img src={Close} alt="close" width={'30px'}/>
                </Button>
        </Box>
        </>
    )
}