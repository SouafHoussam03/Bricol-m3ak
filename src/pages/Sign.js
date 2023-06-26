import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Titel from '../components/Sign/Titel'
import Text from '../components/Sign/Text'

const Sigin = () =>{
    return (
        <div className="body">
            <Navbar />
            <div className="pt"></div>
            <Titel />
            <Text />
            <div className='walo'></div>
            <Footer />
        </div>
    )
}

export default Sigin