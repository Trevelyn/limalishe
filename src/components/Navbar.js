import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

 

  return (
    <nav >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
         <img src={require('../assets/logo.PNG')} alt="Logo" width={50} height={50} className="w-auto h-auto rounded-full mr-4" />
         
        
        </div>
        <ul className="hidden md:flex space-x-4 text-black">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button
          className="md:hidden block items-center justify-center p-2 text-black"
          onClick={toggleNavbar}
        >
          {isMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </div>
      {/* Mobile menu content (optimized using the 'toggleNavbar' state) */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full  text-white">
          <li className="p-4">
            <a href="#">Home</a>
          </li>
          <li className="p-4">
            <a href="#">About</a>
          </li>
          <li className="p-4">
            <a href="#">Services</a>
          </li>
          <li className="p-4">
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;