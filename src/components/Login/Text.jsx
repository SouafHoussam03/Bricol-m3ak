import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import useAuthContext from "../context/AuthContext";
import { Link , useNavigate} from "react-router-dom";
import axios from "../api/axios";


const Text = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const {login, errors} = useAuthContext();

    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     login ({email , password});
    // };




    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]); // Nouvelle variable d'état pour les erreurs
    const navigate = useNavigate();

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const handleLogin = async (event) => {
        event.preventDefault();
        await csrf();
        try {
            await axios.post('/login', { email, password });
            setEmail("");
            setPassword("");
            navigate("/Bricole");
        } catch (e) {
            if(e.response.status === 422)
                setErrors(e.response.data.errors);
        }
    };
    

    return(

        
        <div className="color-bg" id="float"> 
            <div className="zone-text-login">
                    <div className="backround-login" id="float"></div>
                    <div className="zone-form-login container">
                        <h2 className="h2-login">Login</h2>
                        <form className="form-login" onSubmit={handleLogin}>
                            <input className="input-login" type="text" name="Email"id="Email"value={email}onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br/>{errors.password && 
                    <div className="flex">
                        <span className="text-red-400 text-sm m-2 p-2">
                            {errors.password[0]}
                        </span>
                    </div>}
                            <input className="input-login" type="password" name="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><br/>{errors.password && 
                    <div className="flex">
                        <span className="text-red-400 text-sm m-2 p-2">
                            {errors.password[0]}
                        </span>
                    </div>}
                            <Link className="link-login" to="/FindAccount">Forgot Password ?</Link><br/>
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