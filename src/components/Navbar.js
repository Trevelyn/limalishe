import React, {useState} from "react";
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
import logo from "../assets/logo.png"

const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#013220]">
        <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto"src={logo} alt="logo" />
        </div>          
        <ul className="flex hidden">
            <li className="p-4">Home</li>
            <li className="p-4">About Us</li>
            <li className="p-4">Services</li>
            <li className="p-4">Contact Us</li>
        </ul>
        <div><AiOutlineMenu size={20} /></div>
        
        <div>
            <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 m-4 w-auto"src={logo} alt="logo" /> 
            
            <ul className="pt-2 uppercase">
                <li className="p-4">Home</li>
                <li className="p-4">About Us</li>
                <li className="p-4">Services</li>
                <li className="p-4">Contact Us</li>
            </ul>
        </div>
    </div>
</div>    
}
export default Navbar
 