import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Titel from '../../components/Componets pages service/Carpenter/Titel'
import Text from '../../components/Componets pages service/Carpenter/Text'

const Carpenter = () =>{
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

export default Carpenter