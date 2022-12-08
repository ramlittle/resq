//email feature
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";
import {Link} from 'react-router-dom';

const UserHelp = () => {

  //emailfeature needs this to capture all entered fields
  const form = useRef();

  //states
  const [landmarkDetails,setLandmarkDetails]=useState();
  const [emergencyDetails,setEmergencyDetails]=useState();
  const [firstName,setFirstName]=useState();
  const [lastName,setlastName]=useState();
  const [contact, setContact]=useState();
  const [status,setStatus]=useState('pending');
  const [latitude,setLatitude]=useState();
  const [longitude,setLongitude]=useState();
  const [email, setEmail]=useState('alreysonadora123@gmail.com')

  let latitudeValue
  let longitudeValue
 //obtain GEOLOCATION
    const locationMe=navigator.geolocation.getCurrentPosition(function(position) {
      latitudeValue=position.coords.latitude;
      console.log("Latitude is :", latitudeValue);
      longitudeValue=position.coords.longitude;
      console.log("Longitude is :", longitudeValue);
      setLatitude(latitudeValue);
      setLongitude(longitudeValue);
    });
    console.log("latitude outside:", latitude);
    console.log("longitude outside:", longitude);
   

//navigator
const navigate = useNavigate();

const addNewEmergency = (e) => {
		e.preventDefault();

const configuration = {
    method: 'post',
    url: 'http://localhost:8080/api/v1/emergencies/addemergency',
    data: {
      latitude: latitude,
      longitude:longitude,
      landmarkDetails:landmarkDetails,
      emergencyDetails:emergencyDetails,
      firstName:firstName,
      lastName:lastName,
      contact:contact,
      status:status
    },
  };

  // make the API call
  axios(configuration)
    .then((result) => {
      alert(result.data.status);
      
      // window.location.reload(false);
    })
    .catch((error) => {
      alert(error.response.data.status);
    });

     //email feature
     emailjs.sendForm('abc', 'abc', form.current, 'abc')
     .then((result) => {
         // console.log(result.text);
         alert('Email Confirmation Sent! Please check your inbox!');
         //reload the page after sending email, then display to booknowpage again
         navigate('/homepage');
   window.location.reload(false);
     }, (error) => {
         console.log(error.text);
         alert('email sending failed');
     });


}
  return (
    <div className='help-body'>
      <Header />
      <form className="mt-5 mx-5"
      onSubmit={(e) => addNewEmergency(e)}
      ref={form}
      >
        <div className="mb-3">
          <label for="latitude" className="form-label">
            Latitude
          </label>
          <input 
            type="latitude" disabled 
            className="form-control"
            value={latitude}
            onChange={(e) => setLatitude(latitudeValue)}
            id="latitude" />
        </div>
        <div className="mb-3">
          <label for="longitude" className="form-label">
            Longitude
          </label>
          <input 
            type="longitude" disabled
            className="form-control"
            value={longitude}
            onChange={(e) => setLongitude(longitudeValue)}
            id="longitude" />
        </div>
        <div className="mb-3 hide-form">
          <label for="status" className="form-label">
            Status
          </label>
          <input 
            type="status"
            className="form-control"
            value='pending'
            onChange={(e) => setStatus('pending')}
            id="status" />
        </div>
        <div className="mb-3 hide-form">
          <label for='email' className="form-label">
          Email
          </label>
          <input 
            type="email" 
            name='user_email'
            className="form-control"
            value={email}
            onChange={(e) => setEmail('alreysonadora123@gmail.com')}
            id="email" />
        </div>
        <div className="mb-3">
          <label for="landmark" className="form-label">
            Landmark Details
          </label>
          <input 
            type="landmark" 
            className="form-control"
            value={landmarkDetails} 
            onChange={(e) => setLandmarkDetails(e.target.value)}
            id="landmark" />
        </div>
        <div className="mb-3">
          <label for="emergency" className="form-label">
            Emergency Details
          </label>
          
          <input type="emergency" 
            className="form-control" 
            value={emergencyDetails}
            onChange={(e)=>setEmergencyDetails(e.target.value)}
            id="emergency" />
        </div>
        <div className="mb-3">
          <label for="firstName" className="form-label">
            First Name
          </label>
          <input type="firstName" 
            className="form-control" 
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value).toLowerCase()}
            id="firstName" 
            />
        </div>
        <div className="mb-3">
          <label for="lastName" className="form-label">
            Last Name
          </label>
          <input type="lastName" 
            className="form-control" 
            value={lastName}
            id="lastName" 
            onChange={(e)=>setlastName(e.target.value).toLowerCase()}/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Contact Number
          </label>
          <input
            type="tel"
            className="form-control"
            value={contact}
            id="contact"
            onChange={(e)=>setContact(e.target.value)}
          />
        </div>
        <div className='d-flex justify-content-evenly'>
          <Link to='/homepage'>
            <button type="button" className="btn btn-danger mb-2 fw-bold">
              Cancel
            </button>
          </Link>
          <button type="submit" className="btn help-submit mb-2">
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default UserHelp;
