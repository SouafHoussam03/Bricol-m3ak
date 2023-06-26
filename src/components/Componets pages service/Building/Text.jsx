import {useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import React, { useState } from 'react';
import Image1 from "../../Home/image/logo.png";

const Text = () => {
  const [service, setService] = useState("");
  const [adresse, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [laborers, setLaborers] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const csrf = () => axios.get('/sanctum/csrf-cookie')


  const handleSubmit = async (event) => {
    event.preventDefault();
    await csrf();

    try {
      await axios.post("/Building", {
        service,
        adresse,
        date,
        laborers,
      });
      // Réinitialisez les valeurs du formulaire après la sauvegarde réussie
      setService("");
      setAddress("");
      setDate("");
      setLaborers("");
      navigate("/");
    } catch (e) {
      if(e.response.status === 422)
          setErrors(e.response.data.errors);
  }
  };
  return (
    <div className="color-bg" id="float">
      <span className="p-de-text">
        You can book the required service from here :
      </span>
      <div className="zone-de-text" id="float">
        <p>
          Construction services refers to the various stages involved in
          building or updating a building or construction project, including
          planning, design, construction, operation and maintenance. Providing
          construction services requires quality and testing to ensure that all
          required specifications and requirements are met to create a highly
          successful project.
        </p>
      </div>
      <div className="zone-text-service">
        <div className="zone-rezerve">
          <form onSubmit={handleSubmit}>
            <div className="inpt-service">
              <label className="label-service">Service</label>
              <br />
              <select
                className="select"
                id="service"
                name="service"
                alue={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option>Building</option>
                <option>Electricity</option>
                <option>Plumbing</option>
                <option>Carpenter</option>
                <option>Mechanics</option>
                <option>Dyeing</option>
              </select>
            </div>
            {errors.name && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.name[0]}
                      </span>
                    </div>
                  )}
            <div className="inpt-city">
              <label className="label-service">Address</label>
              <br />
              <input
                className="select"
                type="text"
                id="adresse"
                name="adresse"
                placeholder="Your City"
                value={adresse}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.name && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.name[0]}
                      </span>
                    </div>
                  )}
            </div>
            <div className="inpt-date">
              <label className="label-service">Date</label>
              <br />
              <input
                className="select"
                name="date"
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.name && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.name[0]}
                      </span>
                    </div>
                  )}
            </div>
            <div className="inpt-laborer" id="float">
              <label className="label-service">Laborers</label>
              <br />
              <input
                className="select"
                type="number"
                name="laborers"
                id="laborers"
                placeholder="Number of Workers"
                value={laborers}
                onChange={(e) => setLaborers(e.target.value)}
              />
              {errors.name && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.name[0]}
                      </span>
                    </div>
                  )}
            </div>
            <div className="btn-Validate">
              <button className="bt" id="bt" >
                Validate
              </button>
            </div>
          </form>
        </div>
        <div className="backround-service" id="float">
          <div className="crl">
            <img className="logo-service" src={Image1} alt="Logo" />
          </div>
        </div>
        <div className="backround-service-2" id="float"></div>
      </div>
    </div>
  );
};

export default Text;
