import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Titel from '../../components/Componets pages service/Electricity/Titel'
import Text from '../../components/Componets pages service/Electricity/Text'

const Electricity = () =>{
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

export default Electricity