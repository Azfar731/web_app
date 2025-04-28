export default function Contact_section() {
  return (
    <div className=" relative py-12 px-12 h-102 sm:h-48 md:h-64 bg-charcoal text-white">
      {/* <div className="absolute inset-0 bg-black/70"></div> */}

      <div className="relative z-10 h-full">
        <div className="text-center text-4xl  uppercase font-Times-New-Roman font-bold">
          <h1>
            Khalil <br /> & <br /> Khalil
          </h1>
        </div>
        <div className="pt-6 flex flex-col gap-6 justify-start">
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
