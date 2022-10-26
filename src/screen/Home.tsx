import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { ContextProvider } from "../context/Context";

export const Home = () => {
    return (
        <ContextProvider>
            <Header />
            <Post />
        </ContextProvider>
    )
}