import React from "react";
import { Link } from "react-router-dom";


const Text = () => {
    return(
        <div className="color-bg" id="float"> 
            <div className="zone-text-login">
                <div className="backround-login" id="float"></div>
                <div className="zone-form-login container">
                        <h2 className="h2-login">Find your account</h2>
                        <form className="form-login">
                            <p>Please enter your email to search for your account.</p>
                            <input className="input-login" type="email" name="Email" placeholder="Email"/><br/>
                            <button className="botn">Login</button>
                        </form>
                    </div>
                    <div>
                    <Link className="link-Create" to="/Sign">Create a new account</Link>
                    </div>
            </div>
        </div>
    )
}


export default Text