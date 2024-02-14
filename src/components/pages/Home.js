import React from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import About from './About';
import Services from './Services';
import Contacts from './Contacts';


function Home() {
  return (
   <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contacts />
      
   </div>
  )
}

export default Home