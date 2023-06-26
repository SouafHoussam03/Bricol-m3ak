import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Titel from '../components/Login/Titel'
import Text from '../components/Login/Text'

const Login = () =>{
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

export default Login