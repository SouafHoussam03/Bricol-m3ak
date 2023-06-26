import React from "react";
import Image1 from "../../Home/image/logo.png";



const Text = () => {
    return(
        <div className="color-bg" id="float"> 
            <span className="p-de-text">You can book the required service from here :</span>
            <div className="zone-de-text" id="float">
                <p>
                Dyeing is the process of imparting color to textiles, fibers, or fabrics using various methods and techniques. It is an ancient art that has been practiced for centuries, and is still an important part of the textile industry today. The process involves the use of dyes or pigments, which are applied to the textile material in a variety of ways to achieve the desired color or pattern. 
                </p>
            </div>
            <div className="zone-text-service">
                <div className="zone-rezerve">
                <form>
                    <div className="inpt-service">
                        <label className="label-service">Service</label><br/>
                        <select className="select">
                            <option>Dyeing</option>
                            <option>Electricity</option>
                            <option>Plumbing</option>
                            <option>Carpenter</option>
                            <option>Mechanics</option>
                            <option>Building</option>
                        </select>
                    </div>
                    <div className="inpt-city">
                        <label className="label-service">City</label><br/>
                        <input className="select" type="text" placeholder="Your City"/>
                    </div>
                    <div className="inpt-date">
                        <label className="label-service">Date</label><br/>
                        <input className="select" type="date"/>
                    </div>
                    <div className="inpt-laborer"  id="float">
                        <label className="label-service">Laborers</label><br/>
                        <input className="select" type="number" placeholder="Number of Workers"/>
                    </div>
                    <div className="btn-Validate">
                        <button className="bt" id="bt">Validate</button>
                    </div>
                </form>
                </div>
                <div className="backround-service" id="float">
                    <div className="crl">
                        <img className='logo-service' src={Image1} alt="Logo"/>
                    </div>
                </div>
                <div className="backround-service-2" id="float">
                </div>
            </div>
        </div>
    )
}


export default Text