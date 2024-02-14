import React from 'react'

function Header() {
  return (
    <header className="relative bg-cover bg-no-repeat bg-center h-screen" style={{ backgroundImage: "url(./assets/bg1.jpg)" }}>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4"></h1>
        <a href="/about-us" className="inline-block px-4 py-2 rounded bg-green-500 text-white hover:bg-green-700">About Us</a>
      </div>
    </header>
  );
  
}

export default Header