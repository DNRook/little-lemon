import React from 'react'
import { useState } from 'react';

const BookingForm = ({availableTimes, updateTimes}) => {

  const [date, setDate]=useState("");
  const [number, setNumber]=useState(1);
  const [occasion, setOccasion]=useState("birthday");
  
  const getIsFormValid = () => { 
    return ( 
      date && 
      number>0 && number<=10 && 
      occasion !== "occasion" 
    ); 
  }; 

  const handleSubmit = (e) => { 
    window.confirm('If you confirm, you will not be able to cancel it');
    e.preventDefault(); 
    alert("Table Reserved!");
    clearForm(); 
  }; 

  const clearForm = () => { 
    setDate(""); 
    updateTimes("17:00"); 
    setNumber(1); 
    setOccasion("birthday"); 
  }; 

const [finalTime, setFinalTime] = useState(
    availableTimes.map((times) => <option key={times}>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);
    
    var stringify = e.target.value;
    let newdate = new Date(stringify);

    updateTimes(newdate,availableTimes);
    setFinalTime(availableTimes.map((times) =><option key={times}>{times}</option>));
  }
  
 
  return (
    <> 
    <h2 className='form-header'>Reservation Details:</h2>
    <form className='form_section' onSubmit={handleSubmit}>
     
        <label htmlFor="res-date">Choose date</label>
        <input 
          type="date" 
          id="res-date"
          value={date}
          onChange={handleDateChange} required 
          aria-label='date input'/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" required aria-label='time selection'>
          {finalTime}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={number} onChange={(e)=>setNumber(e.target.value)} required aria-label='number of guest input'/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)} required aria-label='occasion selection'>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
        </select>
        <label htmlFor="diet">Diet Restriction</label>
        <textarea id='diet' rows="4" cols="5" autoComplete='off' maxLength='100' placeholder="type here" style={{width: 400 +'px', height: 50+'px'}} aria-label="diet input"></textarea>
        <div>
        <input aria-label="Submit on click" className='submit-button' type="submit" value="Make Your reservation" disabled={!getIsFormValid()}/>
        <input aria-label="Cancel on click" className='submit-button' type="button" value="Cancel"/>
        </div>
        
    </form>
    </>
  )
}

export default BookingForm