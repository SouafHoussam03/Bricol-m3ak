import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ReactVideo from "../components/Bricole/ReactVideo"
import Titel from "../components/Bricole/Titel"
import Titel2 from "../components/Bricole/Titel2"
import Text from "../components/Bricole/Text"

const Bricole = () =>{
    return(
        <div className="body">
            <Navbar/>
            <div className="pt"></div>
            <Titel/>
            <ReactVideo />
            <br/>
            <Titel2 />
            <Text />
            <div className="walo"></div>
            <Footer />
        </div>
    )
}
export default Bricole