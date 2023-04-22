import React from 'react'
import Booking from '../pages/Booking';
import Reservation from '../pages/Reservation';
import HomePage from '../pages/Homepage';
import About from '../pages/About';

import { Routes, Route} from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/reservation" element={<Booking />}></Route>
        <Route path="/booking" element={<Reservation />}></Route>
     </Routes>
    </div>
  )
}

export default Main