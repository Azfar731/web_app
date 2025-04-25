export default function Contact_section() {
  return (
    <div id="contact_section" className=" relative py-12 px-12 h-102 sm:h-48 md:h-64 bg-[url('/images/landscape3.jpg')] md:bg-[url('/images/landscape2.jpg')]  bg-cover bg-center text-white font-EBGaramond">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 h-full md:flex md:items-center md:justify-around lg:justify-center lg:gap-32 ">
        <div className="text-center text-4xl  uppercase font-Bodoni font-bold md:hidden">
          <h1>
            Khalil <br /> & <br /> Khalil
          </h1>
        </div>
        <div className="text-center text-4xl  uppercase font-Bodoni font-bold max-md:hidden">
          <h1>
            Khalil & Khalil
          </h1>
        </div>
        <div className="pt-6 md:pt-0 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 justify-start md:border-l md:border-white md:pl-6 lg:pl-12 ">
          <div id="address">
            <p>
              303 Peachtree Street NE
              <br />
              52nd Floor
              <br />
              Atlanta, Georgia 30308
            </p>
          </div>
          <div id="contact">
            <p>
              Tel. (404) 382 – 9942
              <br />
              Fax (404) 565 – 1103
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
