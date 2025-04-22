import { NavLink } from "react-router";
import Logo from "/app/assets/logo.svg?react";
import { useCallback, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
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
    <nav>
      <ul className="fixed w-full flex justify-between items-center bg-navColor py-1 px-12 text-gray-50">
        {/* <img src={"/assets/logo.svg"} alt="My App Logo" className="w-60 h-auto" /> */}
        <Logo className="w-60 h-auto text-blue-500" />
        <li className="flex space-x-24 text-xl font-medium">
          <NavLink to="/" className="hover:text-gray-500">
            About
          </NavLink>
          <div
            className="relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to="/team"
              className="flex justify-between items-center hover:text-gray-500"
            >
              Team <RiArrowDropDownLine className="w-8 h-8" />
            </NavLink>

            {/* Dropdown panel */}
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
                <li className="px-4 pt-2 pb-4 hover:bg-gray-100">
                  <NavLink to="/team/mehr-ali-hassan">Mehr Ali Hassan</NavLink>
                </li>
                <li className="px-4 py-4 hover:bg-gray-100">
                  <NavLink to="/team/fahad-zaheer">Fahad Zaheer</NavLink>
                </li>
                <li className="px-4 py-4 hover:bg-gray-100">
                  <NavLink to="/team/umar-shabbir">Umar Shabbir</NavLink>
                </li>
                <li className="px-4 pt-4 pb-2 hover:bg-gray-100">
                  <NavLink to="/team/junaid-shabbir">Junaid Shabbir</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <NavLink to="/contact" className="hover:text-gray-500">
            Location
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
