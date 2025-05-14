import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "/app/assets/logo.svg?react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  // Mobile menu state
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileToggle = () => {
    setMobileOpen((open) => !open);
  };

  return (
    <nav className="fixed w-full bg-navColor text-gray-50 z-50">
      {/* Top bar: Hamburger - Logo - placeholder */}
      <div className="flex items-center justify-between px-4 py-3 md:px-12">
        {/* Placeholder to keep logo centered */}
        <div className="w-6 h-6 md:hidden" />

        {/* Logo centered */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Link to="/">
            <Logo className="w-32 h-auto text-blue-500" />
          </Link>
        </div>

        {/* Hamburger icon on mobile */}
        <button
          onClick={handleMobileToggle}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <RiCloseLine className="w-6 h-6" />
          ) : (
            <RiMenu3Line className="w-6 h-6" />
          )}
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <NavLink to="/aboutus" className="hover:text-gray-300">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="hover:text-gray-300">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/members" className="hover:text-gray-300">
              Members
            </NavLink>
          </li>
          <li>
            <NavLink to="/our-values" className="hover:text-gray-300">
              Our Values
            </NavLink>
          </li>
          <li>
            <NavLink to="#contact_section" className="hover:text-gray-300">
              Location
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`${
          mobileOpen ? "block" : "hidden"
        } md:hidden bg-white text-lightBrown`}
      >
        <ul className="flex flex-col items-center justify-center text-base font-medium">
          <li>
            <NavLink
              to="/aboutus"
              onClick={() => setMobileOpen(false)}
              className="block py-3"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => setMobileOpen(false)}
              className="block py-3"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/members"
              onClick={() => setMobileOpen(false)}
              className="block py-3"
            >
              Members
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-values"
              onClick={() => setMobileOpen(false)}
              className="block py-3"
            >
              Our Values
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#contact_section"
              onClick={() => setMobileOpen(false)}
              className="block py-3"
            >
              Location
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
