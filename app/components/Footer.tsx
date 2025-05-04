import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import Contact_section from "./Contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Contact_section />
      <div className="bg-charcoal text-gray-400 py-6 px-6 font-EBGaramond">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* copyright */}
          <span className="text-sm">
            &copy; {currentYear} Khalil & Khalil Firm All Rights Reserved
          </span>
          {/* social icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/share/1AXsq7zkwz/?mibextid=wwXIfr"
              aria-label="Facebook"
              className="hover:text-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://www.instagram.com/khalilandkhalil?igsh=ZGt0OXRkZjk2cGh5"
              aria-label="Instagram"
              className="hover:text-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={16} />
            </a>

            
          </div>
        </div>
        {/* developed by line */}
        <div className="mt-6 max-md:text-center  text-xs group">
          Developed by{" "}
          <a
            href="https://azfar731.github.io/"
            target="no_blank"
            className="relative text-blue-400 hover:text-blue-300 transition cursor-pointer"
          >
            Azfar Razzaq
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
