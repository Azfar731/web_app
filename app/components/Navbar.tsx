import { Link, NavLink } from "react-router";



export default function Navbar() {
  return (
    <nav>
    <ul className="flex justify-between items-center bg-navColor py-1 px-12 text-gray-50">
      <img src={"/assets/logo.svg"} alt="My App Logo" className="w-60 h-auto" />
      <li className="flex space-x-24 text-xl font-semibold">
        <NavLink to="/" className="hover:text-gray-500">
        About
        </NavLink>
        <NavLink to="/about" className="hover:text-gray-500">
        Team
        </NavLink>
        <NavLink to="/contact" className="hover:text-gray-500">
        Location
        </NavLink>
      </li>
    </ul>
    </nav>
  );
}
