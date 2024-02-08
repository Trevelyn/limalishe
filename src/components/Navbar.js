import React, {useState} from "react";

const Navbar = () => {
    return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#013220]">
         <ul className="flex hidden">
            <li className="p-4">Home</li>
            <li className="p-4">About Us</li>
            <li className="p-4">Services</li>
            <li className="p-4">Contact Us</li>
        </ul>
    </div>
    )
    
}
export default Navbar