import React from "react";
import Image1 from "../../Home/image/logo.png";



const Text = () => {
    return(
        <div className="color-bg" id="float"> 
            <span className="p-de-text">You can book the required service from here :</span>
            <div className="zone-de-text" id="float">
                <p>
                An electrician is a professional tradesperson who specializes in the installation, maintenance, and repair of electrical systems and equipment. They work with various electrical components such as wiring, lighting fixtures, switchboards, and circuit breakers, to ensure the safe and efficient functioning of electrical systems in homes, businesses, and other structures. 
                </p>
            </div>
            <div className="zone-text-service">
                <div className="zone-rezerve">
                <form>
                    <div className="inpt-service">
                        <label className="label-service">Service</label><br/>
                        <select className="select">
                            <option>Electricity</option>
                            <option>Building</option>
                            <option>Plumbing</option>
                            <option>Carpenter</option>
                            <option>Mechanics</option>
                            <option>Dyeing</option>
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