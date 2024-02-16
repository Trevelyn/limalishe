import React from 'react';



function Contacts() {
  return (
    <section className="bg-lime-700 py-16 px-8 lg:px-20">
    <div className="container mx-auto flex flex-col lg:flex-row items-center">
      <div className="flex-1">
        <img src="/your-logo.png" alt="Company logo" className="h-20 w-auto mb-4 lg:mb-0" />
      </div>

      <div className="flex-1 text-white text-center lg:text-left lg:ml-12">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg">
          We'd love to hear from you! Feel free to contact us using any of the methods below.
        </p>
        <address className="mt-4">
          <p className="font-bold">Company Name</p>
          <p>123 Main Street, Anytown, CA 12345</p>
          <p>Phone: (555) 555-5555</p>
          <p>Email: contact@yourcompany.com</p>
        </address>
      </div>

      <div className="flex-1 mt-8 lg:mt-0 lg:ml-12">
        <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="https://www.facebook.com/your-company" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook text-2xl text-white hover:text-sky-400"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/your-company" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter text-2xl text-white hover:text-sky-400"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/your-company" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram text-2xl text-white hover:text-sky-400"></i>
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Contacts