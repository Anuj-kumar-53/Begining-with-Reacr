import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes  } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
    <div className="flex justify-between bg-gray-100 p-5 max-w-full mx-auto">
      <div className="text-xl font-extrabold text-green-400 ml-30">
        <h1>First Project</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        <p className="hover:text-green-500">Home</p>
        <p className="hover:text-green-500">About</p>
        <p className="hover:text-green-500">Services</p>
        <p className="hover:text-green-500">Help</p>
      </div>

      <div className="flex gap-5">
        <span>
          <button>Submit</button>
        </span>

        {/* Menu Icon */}
        <span className="mr-10 cursor-pointer" onClick={handleNav}>
          {nav ? (
            <FontAwesomeIcon icon={faTimes} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="lg" />
           
          )}
        </span>
      </div>
      

      {/* Mobile Menu (Only visible when `nav` is true) */}
      {nav && (
        <div className="fixed left-0 top-0 right-0 w-[40%] border-r border-gray-200 h-full bg-gray-100">
          <div className="text-xl font-extrabold text-green-400 mt-4">
            <h1>First Project</h1>
          </div>
          <div className="pt-10 uppercase">
            <p className="hover:text-green-500 p-4 border-b border-green-200">Home</p>
            <p className="hover:text-green-500 p-4 border-b border-green-200">About</p>
            <p className="hover:text-green-500 p-4 border-b border-green-200">Services</p>
            <p className="hover:text-green-500 p-4 border-b border-green-200">Help</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
