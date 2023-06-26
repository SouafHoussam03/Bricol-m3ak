import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Titel from '../components/FindAccount/Titel'
import Text from '../components/FindAccount/Text'

const FindAccount = () =>{
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

export default FindAccount