"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 bg-opacity-20 backdrop-blur-sm fixed lg:h-[4.5rem] top-0 left-0 w-full z-50 shadow">
      <div className=" mx-auto flex items-center justify-between p-6 text-white capitalize">
        <img src="./logo.png" className="w-48 lg:w-56" />

        <div className="hidden sm:flex space-x-6">
          <NavLink href="#">Nuestra compañía</NavLink>
          <NavLink href="#">Nuestros servicios</NavLink>
          <NavLink href="#">
            <img src="/spain.svg" className="w-6" alt="" />
          </NavLink>
          <NavLink href="#">Contáctanos</NavLink>
          <NavLink href="#">Portal de pacientes</NavLink>
        </div>

        <div className="sm:hidden">
          {/* Mobile Menu Button */}
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-blue-900 text-white py-4">
          <NavLink href="#">Nuestra compañía</NavLink>
          <NavLink href="#">Nuestros servicios</NavLink>
          <NavLink href="#">Contáctanos</NavLink>
          <NavLink href="#">Portal de pacientes</NavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: any) => {
  return (
    <a
      href={href}
      className="border-b-2 border-transparent hover:border-blue-500 mx-1.5 sm:mx-6 block py-2"
    >
      {children}
    </a>
  );
};

export default Navbar;
