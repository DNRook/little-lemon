import React from 'react'
import BookingForm from '../components/BookingForm'
import {useReducer } from 'react';
import { fetchAPI } from "../components/bookingsAPI";


export default function Booking() {
 
  const output = fetchAPI(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  function updateTimes(date) {
    return fetchAPI(date);
  }

  return (
    <>
     <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
    </>
   
  )
}

//export default Booking