import Titel from "../components/Contact/Titel"
import Navbar from "../components/Navbar"
import Text from "../components/Contact/Text"
import Footer from "../components/Footer"


const Contact = () =>{
    return(
        <div className="body">
            <Navbar />
            <div className="pt"></div>
            <Titel />
            <Text />
            <div className="walo2"></div>
            <Footer />
        </div>
        
    )
}
export default Contact