import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-gray-400 py-6 font-EBGaramond">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* copyright */}
        <span className="text-sm">
          &copy; {currentYear} Khalil & Khalil Firm All Rights Reserved
        </span>

        {/* social icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-gray-200 transition-colors"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-gray-200 transition-colors"
          >
            <FaTwitter size={16} />
          </a>
          <a
            href="#"
            aria-label="Google+"
            className="hover:text-gray-200 transition-colors"
          >
            <FaGooglePlusG size={16} />
          </a>
          <a
            href="#"
            aria-label="Pinterest"
            className="hover:text-gray-200 transition-colors"
          >
            <FaPinterestP size={16} />
          </a>
        </div>
      </div>

      {/* developed by line */}
      <div className="mt-6 text-center text-xs group">
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
    </footer>
  );
}
