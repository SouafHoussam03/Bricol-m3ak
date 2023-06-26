
import React from 'react'
import Logo from "./Home/image/logo.png"
import Image1 from './image/11_20-Electrical-.jpg'
import Image2 from './image/278461544269425.jpg'
import Image3 from './image/batteries-diagnostic.jpg'
import Image4 from './image/brickwork-1-620.jpg'
import Image5 from './image/csm_karriere3__stelle_0e909d1b9e.jpg'
import Image6 from './image/flowingwaterhose-2018-10-1000x594.jpg'
import { Link } from "react-router-dom";

const Footer = () =>{ 
    return (
            <footer className='footer'>
                <div className='zone-bricole' id='float'>
                    <h3 id='h3-titel'>Bricole</h3>
                    <div className='link-bricole'>
                        <Link className="nav-link text-white-50" to="/Electricity">Electricity</Link>
                        <Link className="nav-link text-white-50" to="/Plumbing">Plumbing</Link>
                        <Link className="nav-link text-white-50" to="/Carpenter">Carpenter</Link>
                        <Link className="nav-link text-white-50" to="/Building">Building</Link>
                        <Link className="nav-link text-white-50" to="/Dyeing">Dyeing</Link>
                        <Link className="nav-link text-white-50" to="/Mechanics">Mechanics</Link>
                    </div>
                </div>
                <div className='zone-contact' id='float'>
                    <h3 id='h3-titel'>Contact Us</h3>
                    <div className='link-contact'>
                        <h6>ADDRESS</h6>
                        <p>123 settat, city</p>
                        <h6>PHONE</h6>
                        <p>(+212) 612345678</p>
                        <h6>EMAIL</h6>
                        <p>BRICOLE.M3AK@gmail.com</p>
                    </div>
                </div>
                <div className='circle' id='float'>
                    <img className='logo' src={Logo} alt="Logo" id='logo'/>
                </div>
                <div className='zone-instagram' id='float'>
                    <h3 id='h3-titel' className='instagram'>Instagram</h3>
                    <img className='image-instagram' src={Image1} alt="Logo"/>
                    <img className='image-instagram' src={Image2} alt="Logo"/>
                    <img className='image-instagram' src={Image3} alt="Logo"/>
                    <img className='image-instagram' src={Image4} alt="Logo"/>
                    <img className='image-instagram' src={Image5} alt="Logo"/>
                    <img className='image-instagram' src={Image6} alt="Logo"/>
                </div>
                <div className='zone-icon' id='float'>
                    <svg className='icone' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                    <svg className='icone' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    <svg className='icone' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </div>
            </footer>
    )
};

export default Footer