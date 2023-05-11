import React from 'react'
import Booking from '../pages/Booking';
import HomePage from '../pages/Homepage';
import About from '../pages/About';
import Help from '../pages/Help';

import { Routes, Route} from "react-router-dom";


const Main = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/booking" element={<Booking/>}></Route>
        <Route path="/help" element={<Help/>}></Route>
     </Routes>
    </div>
  )
}

export default Main
