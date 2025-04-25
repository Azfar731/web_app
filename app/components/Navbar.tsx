import React, { useState, useRef, useCallback } from "react";
import { Link, NavLink } from "react-router";
import Logo from "/app/assets/logo.svg?react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";
import teamData from "~/data/team.json";
import { toTitleCase } from "~/utility/functions";

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

  const memberNames = teamData.map((member) => toTitleCase(member.name));
  
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
            <NavLink to="/#about_section" className="hover:text-gray-300">
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
              <div className="flex items-center hover:text-gray-300">
                Team <RiArrowDropDownLine className="ml-1 w-5 h-5" />
              </div>
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
                  {memberNames.map((member, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-100">
                      <NavLink
                        to={`/members/${member
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {member}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
        <ul className="flex flex-col items-center justify-center text-base font-medium ">
          <li>
            <NavLink to="/" className="block py-3 ">
              About
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              onClick={handleTeamToggle}
              className="w-full flex items-center justify-center py-3  focus:outline-none text-center"
            >
              <div className="pl-4">Team</div>
              {teamOpen ? (
                <RiArrowDropUpLine className="w-8 h-8" />
              ) : (
                <RiArrowDropDownLine className="w-8 h-8" />
              )}
            </button>
            {teamOpen && (
              <ul className="bg-white flex flex-col items-center justify-center text-goldFont">
                {memberNames.map((member, index) => (
                  <li key={index} className="block py-2">
                    <NavLink
                      to={`/members/${member
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {member}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/contact" className="block px-4 py-3">
              Location
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
