import Titel from "../components/Home/Titel";
import Text from "../components/Home/Text";
import Image from "../components/Home/Image";
import NavbarHome from "../components/Home/NavbarHome";



const Home = () => {
    return <div className="home">
        <NavbarHome />
        <Titel />
        <Text /> 
        <Image />
        </div>;
};

export default Home;