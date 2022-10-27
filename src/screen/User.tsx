import { Button } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";


export const User = () => {

    useEffect(() => {
        getInfoProfile();
    });

    const { getAllInfo } = useContext(Context);
    const {username} = useParams();

    const getInfoProfile = async () => {
        const data = await getAllInfo({username})
        console.log(data);    
        return data;
    }

    

    return (
        <div>
            <Button onClick={() => history.go(-1)}>Voltar</Button>
            <h1>ola {username}</h1>
        </div>
    )
}