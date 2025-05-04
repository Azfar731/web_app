import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

export default function Contact_section() {
  return (
    <div
      id="contact_section"
      className=" relative py-12 px-12 h-110 sm:h-48 md:h-72 bg-[url('/images/landscape3.jpg')] md:bg-[url('/images/landscape2.jpg')]  bg-cover bg-center text-white font-EBGaramond"
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 h-full md:flex md:items-center md:justify-around lg:justify-center lg:gap-32 ">
        <div className="text-center text-4xl  uppercase font-Times-New-Roman lg:hidden">
          <h1>
            Khalil <br /> & <br /> Khalil
          </h1>
        </div>
        <div className="text-center text-4xl  uppercase font-Times-New-Roman font-bold max-lg:hidden">
          <h1>Khalil & Khalil</h1>
        </div>
        <div className="pt-6 md:pt-0 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 justify-start md:border-l md:border-white md:pl-6 lg:pl-12 ">
          <div id="address">
            <ol className="list-decimal list-inside space-y-1">
              <li>
                Office 23-25, Judicial Complex Phalia, District Mandi Bahauddin
              </li>
              <li>
                Opposite Tehsil Courts Phalia, Tehsil Phalia, District Mandi
                Bahauddin
              </li>
              <li>2nd floor, New Jahangir Tower, 9 Fane Road, Lahore</li>
            </ol>
          </div>
          <div id="contact" className="flex flex-col gap-2 justify-center items-start">
            <p className="flex items-center justify-center gap-2">
              <FaSquarePhone /> (+92) 336–4770095
            </p>
            <p className="flex items-center justify-center gap-2">
              <MdEmail /> info@khalilandkhalil.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
