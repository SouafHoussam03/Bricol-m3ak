import React from 'react'
import Image1 from '../image/11_20-Electrical-.jpg'
import Image2 from '../image/278461544269425.jpg'
import Image3 from '../image/batteries-diagnostic.jpg'
import Image4 from '../image/brickwork-1-620.jpg'
import Image5 from '../image/csm_karriere3__stelle_0e909d1b9e.jpg'
import Image6 from '../image/flowingwaterhose-2018-10-1000x594.jpg'
import { Link } from 'react-router-dom'


const Text = () => {
    return(
        <div className='zone-text-services' id='float'>
            <div className='zone-image-services container'>
                <div className='image-services'>
                    <img className='img-services' src={Image1} alt="Logo"/>
                    <Link to="/Electricity">
                        <div className="overlay">
                            <h2>Electricity</h2>
                        </div>
                    </Link>
                </div>
                <div className='image-services'>
                    <img className='img-services' src={Image2} alt="Logo"/>
                    <Link to="/Carpenter">
                        <div className="overlay">
                            <h2>Carpenter</h2>
                        </div>
                    </Link>
                </div>
                <div className='image-services'>
                    <img className='img-services'  src={Image3} alt="Logo"/>
                    <Link to="/Mechanics">
                        <div className="overlay">
                            <h2>Mechanics</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='zone-2-image-services container'>
                <div className='image-services'>
                    <img className='img-services'  src={Image4} alt="Logo"/>
                    <Link to="/Building">
                        <div className="overlay">
                            <h2>Building</h2>
                        </div>
                    </Link>
                </div>
                <div className='image-services'>
                    <img className='img-services'  src={Image5} alt="Logo"/>
                    <Link to="/Dyeing">
                        <div className="overlay">
                            <h2>Dyeing</h2>
                        </div>
                    </Link>
                </div>
                <div className='image-services'>
                    <img className='img-services' src={Image6} alt="Logo"/>
                    <Link to="/Plumbing">
                        <div className="overlay">
                            <h2>Plumbing</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Text