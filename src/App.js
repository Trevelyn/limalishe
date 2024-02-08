import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contacts';


function App() {
  return (
    <div>
    <Routes>
      {/* <Navbar/> */}
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Service' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
