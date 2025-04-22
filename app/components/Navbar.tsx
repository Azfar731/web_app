import React, { useState, useRef, useCallback } from "react";
import { NavLink } from "react-router";
import Logo from "/app/assets/logo.svg?react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";

export default function Navbar() {
  //mobile-menu states
  const [mobileOpen, setMobileOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);

  // Toggle mobile menu
  const handleMobileToggle = () => {
    setMobileOpen((open) => !open);
    if (mobileOpen) setTeamOpen(false);
  };

  // Toggle "Team" submenu on mobile
  const handleTeamToggle = () => {
    setTeamOpen((open) => !open);
  };

  //desktop menu states
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<number>(0);

  const handleMouseEnter = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Delay closing by 2s
    closeTimer.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 500);
  }, []);

  return (
    <nav className="fixed w-full bg-navColor text-gray-50 z-50">
      {/* Top bar: Hamburger - Logo - placeholder */}
      <div className="flex items-center justify-between px-4 py-3 md:px-12">
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

        {/* Logo centered */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Logo className="w-32 h-auto text-blue-500" />
        </div>

        {/* Placeholder to keep logo centered */}
        <div className="w-6 h-6 md:hidden" />

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <NavLink to="/" className="hover:text-gray-300">
              About
            </NavLink>
          </li>
          {/* Team dropdown on desktop */}
          <li className="relative group">
            <div
              className="relative cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/team"
                className="flex items-center hover:text-gray-300"
              >
                Team <RiArrowDropDownLine className="ml-1 w-5 h-5" />
              </NavLink>
              <div
                className={`
                absolute top-full left-0 mt-2 w-40 bg-white text-black rounded shadow-lg
                transition-opacity duration-300
                ${
                  isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }
            `}
              >
                <ul className="py-2 text-sm font-medium">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/team/mehr-ali-hassan">
                      Mehr Ali Hassan
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/team/fahad-zaheer">Fahad Zaheer</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/team/umar-shabbir">Umar Shabbir</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/team/junaid-shabbir">Junaid Shabbir</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-300">
              Location
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`${mobileOpen ? "block" : "hidden"} md:hidden bg-navColor`}
      >
        <ul className="flex flex-col text-base font-medium">
          <li className="border-t border-gray-700">
            <NavLink to="/" className="block px-4 py-3 hover:bg-gray-700">
              About
            </NavLink>
          </li>
          <li className="border-t border-gray-700">
            <button
              onClick={handleTeamToggle}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-700 focus:outline-none"
            >
              <span>Team</span>
              {teamOpen ? (
                <RiArrowDropUpLine className="w-5 h-5" />
              ) : (
                <RiArrowDropDownLine className="w-5 h-5" />
              )}
            </button>
            {teamOpen && (
              <ul className="bg-navColor">
                <li>
                  <NavLink
                    to="/team/mehr-ali-hassan"
                    className="block px-6 py-2 hover:bg-gray-700"
                  >
                    Mehr Ali Hassan
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/team/fahad-zaheer"
                    className="block px-6 py-2 hover:bg-gray-700"
                  >
                    Fahad Zaheer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/team/umar-shabbir"
                    className="block px-6 py-2 hover:bg-gray-700"
                  >
                    Umar Shabbir
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/team/junaid-shabbir"
                    className="block px-6 py-2 hover:bg-gray-700"
                  >
                    Junaid Shabbir
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="border-t border-gray-700">
            <NavLink
              to="/contact"
              className="block px-4 py-3 hover:bg-gray-700"
            >
              Location
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
