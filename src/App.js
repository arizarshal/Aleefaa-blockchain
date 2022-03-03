
import React from 'react'
import Front from './Pages/Front';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from './Pages/Community';
import Validators from './Pages/Validators';
import Navbar from './Components/Navbar';


const app = () => {
  return (
    <>
    <Router>
<Routes>
<Route exact path ="/" element={<><Navbar/><Front/><Footer/></>}/>
<Route path = "/community" element={<><Navbar/><Community/></>}/>
<Route path = "/validators" element={<><Navbar/><Validators/></>}/>
<Route path = "/navbar" element={<Navbar/>}/>

      </Routes>
      </Router>

    </>
  )
}

export default app