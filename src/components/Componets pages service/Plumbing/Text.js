import React from "react";
import Image1 from "../../Home/image/logo.png";



const Text = () => {
    return(
        <div className="color-bg" id="float"> 
            <span className="p-de-text">You can book the required service from here :</span>
            <div className="zone-de-text" id="float">
                <p>
                Plumbing services refers to the various stages involved in providing plumbing systems or services for a building or construction project, including planning, design, installation, operation and maintenance. Providing plumbing services requires quality and testing to ensure that all required specifications and requirements are met to create a highly successful project.                </p>
            </div>
            <div className="zone-text-service">
                <div className="zone-rezerve">
                <form>
                    <div className="inpt-service">
                        <label className="label-service">Service</label><br/>
                        <select className="select">
                            <option>Plumbing</option>
                            <option>Electricity</option>
                            <option>Building</option>
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