//db connection
import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';

//component
import Bookings from './components/Bookings.js';
import BookedSlots from './components/BookedSlots';
import AvailableSlots from './components/AvailableSlots';

//Routing
import {Routes,Route} from 'react-router';
//css
import './css/General.css'


//pages
import BookingPage from './pages/BookingPage.js';
import LandingPage from './pages/LandingPage.js';
import LoginPage from './pages/LoginPage.js';
import FaqPage from './pages/FaqPage.js';
import AboutPage from './pages/AboutPage.js';
import BookNowPage from './pages/BookNowPage';
import BookThisSchedulePage from './pages/BookThisSchedulePage.js'
const App =()=>{

  //initial load of data
const bookings=useSelector(state=>state.bookings)

const dispatch=useDispatch();
useEffect(()=>{
    axios.get('http://localhost:8080/api/v1/bookings')
    .then(res =>{
    //   setData(res.data);
    //dispatch the data into reducer
    dispatch({type:"POPULATE_BOOKINGS",payload:{bookings:res.data}})
    })
    .catch(err =>{
    console.log('error daw',err);
    })
}, [])//initial load display only, if [] is not here, it will not stop displaying on console.


//AVAILABLE
const availableSlots=bookings.filter(book=>{
  return book.status==='available';
})

//BOOKED
const bookedSlots=bookings.filter(book=>{
return book.status==='booked';



})
  return(
    <div>
     <Routes>
      <Route path='/'element={<LandingPage />}/>
      <Route path='/faq'element={<FaqPage />}/>
      <Route path='/login'element={<LoginPage />}/>
      <Route path='/about'element={<AboutPage />}/>
      <Route path='/bookingpage/*'element={<BookingPage />}/>
          {/* sub route of bookingPage */}
          <Route path='/bookings'element={<Bookings bookings={bookings}/>}/>
          <Route path='/bookedslots'element={<BookedSlots bookedSlots={bookedSlots}/>}/>
          <Route path='/availableslots'element={<AvailableSlots availableSlots={availableSlots}/>}/>
      <Route path='/booknowpage'element={<BookNowPage />}/>
      <Route path='/bookthisschedule'element={<BookThisSchedulePage />}/>

      
     </Routes>
    </div>
    
  )
}

export default App;