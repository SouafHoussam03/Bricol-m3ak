import React from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "../api/axios";

const Text = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]); // Nouvelle variable d'état pour les erreurs
  const navigate = useNavigate();

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const handleRegister = async (event) => {
    event.preventDefault();
    await csrf();

    try {
      await axios.post("/register", {
        name,
        email,
        password,
        password_confirmation,
      });

      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      setName("");
      navigate("/Bricole");
    } catch (e) {
      if (e.response.status === 422) setErrors(e.response.data.errors);
    }
  };
  return (
    <div className="color-bg" id="float">
      <div className="zone-text-login">
        <div className="backround-login" id="float"></div>
        <div className="zone-form-login container">
          <h2 className="h-login">Create a new account</h2>
          <form className="form-login" onSubmit={handleRegister}>
            <div className="mb-1">
              <input
                className="input-login"
                type="text" name="Usename" placeholder="Usename"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <div className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.name[0]}
                  </span>
                </div>
              )}
            </div>
            <div className="mb-1">
              <input
                className="input-login"
                type="email" name="E-mail " placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.email[0]}
                  </span>
                </div>
              )}
            </div>
            <div className="mb-1">
              <input
                className="input-login"
                type="password" name="Password" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.password[0]}
                  </span>
                </div>
              )}
            </div>
            <div className="mb-1">
              <input
                className="input-login"
                type="password" name="Password" placeholder="Password Confirmation"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              {errors.password_confirmation && (
                <div className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.password_confirmation[0]}
                  </span>
                </div>
              )}
            </div>
            <div className="Namemb-10">
              <button
                type="submit"
                className="botn mb-4" style={{margin:"0px",padding:"0px"}}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    // <div className="color-bg" id="float">
    //     <div className="zone-text-login">
    //             <div className="backround-login" id="float"></div>
    //             <div className="zone-form-login container">
    //                 <h2 className="h-login">Create a new account</h2>
    //                 <form className="form-login" onSubmit={handleRegister}>
    //                     <input className="input-login" type="text" name="Usename" placeholder="Usename" value={name}onChange={(e) => setName(e.target.value)}/><br/>{errors.email && (
    //                     <div className="flex">
    //                     <span className="text-red-400 text-sm m-2 p-2">
    //                         {errors.email[0]}
    //                     </span>
    //                     </div>
    //                     )}
    //                     <input className="input-login" type="email" name="E-mail " placeholder="E-mail" value={email}onChange={(e) => setEmail(e.target.value)}/><br/>{errors.email && (
    //                     <div className="flex">
    //                     <span className="text-red-400 text-sm m-2 p-2">
    //                         {errors.email[0]}
    //                     </span>
    //                     </div>
    //                     )}
    //                     <input className="input-login" type="password" name="Password" placeholder="Password" value={password}onChange={(e) => setPassword(e.target.value)}/><br/>{errors.email && (
    //                     <div className="flex">
    //                     <span className="text-red-400 text-sm m-2 p-2">
    //                         {errors.email[0]}
    //                     </span>
    //                     </div>
    //                     )}
    //                     <input className="input-login" type="password" name="Password" placeholder="Password Confirmation" value={password_confirmation}onChange={(e) => setPasswordConfirmation(e.target.value)}/><br/>{errors.email && (
    //                     <div className="flex">
    //                     <span className="text-red-400 text-sm m-2 p-2">
    //                         {errors.email[0]}
    //                     </span>
    //                     </div>
    //                     )}
    //                     <Link to="/Sign" className="text-primary hover:underline">
    //           Sign Up
    //         </Link>
    //                 </form>
    //             </div>
    //     </div>
    // </div>
  );
};

export default Text;
