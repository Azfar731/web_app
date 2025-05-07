export default function About_section() {
  return (
    <>
      <div
        id="about_section"
        className="pt-12 bg-white flex flex-col justify-center items-center scroll-mt-20"
      >
        <h2 className="text-gray-800 text-4xl uppercase font-Cinzel ">
          Our Expertise
        </h2>
        <div className="mt-4 px-6 py-12 lg:max-xl:py-8 xl:pl-24 bg-gray-200 w-full lg:flex lg:items-center lg:justify-start lg:gap-8">
          <div className="relative w-128 h-52 max-lg:hidden">
            <img
              src="images/focus.jpg"
              className="w-128 absolute"
              alt="arbitrary image"
            />
          </div>
          <div>
            <h3 className="font-Abril text-2xl text-bronze">Focus</h3>
            <p className="pt-3 lg:w-128 text-gray-800 text-xl font-EBGaramond font-medium">
              Our daily focus is on taxation and we use that expertise to
              deliver results for taxpayers of all types. Our team has over 100
              years of combined experience and we are nationally and
              internationally recognized for our expertise in tax litigation.
            </p>
          </div>
        </div>
        <div className="px-6 py-12 lg:pb-8 lg:pt-16 xl:pt-28 xl:pl-64 bg-charcoal w-full lg:flex lg:items-center lg:justify-start lg:gap-8">
          <div>
            <h3 className="font-Abril text-2xl text-bronze">Services</h3>
            <p className="pt-3 lg:w-128 text-gray-100 text-xl font-EBGaramond font-medium">
              We offer comprehensive legal expertise in Criminal,
              Civil, and Family Law, alongside specialized services in Corporate
              & Commercial matters, Cooperative & Property Law, and Intellectual
              Property & Trademark protection. With dedicated counsel and
              effective representation, we navigate complex legal landscapes to
              ensure optimal outcomes tailored precisely to our clients’ diverse
              needs.
            </p>
          </div>
          <div className="relative w-128 h-52 max-lg:hidden">
            <img
              src="images/services.jpg"
              className="w-128 absolute"
              alt="arbitrary image"
            />
          </div>
        </div>
        <div className="px-6 lg:pl-64 xl:pl-92 py-12 xl:py-28 bg-gray-200 w-full">
          <h3 className="font-Abril text-2xl text-bronze">
            Tax Estate & Planning
          </h3>
          <p className="pt-3 lg:w-128 text-gray-800 text-xl font-EBGaramond font-medium">
            We advise entrepreneurs and business owners on asset sales, business
            transfers, reorganizations, and succession planning. We also help
            individuals with personal estate planning and assist when estate
            plans are challenged in court.
          </p>
        </div>
      </div>
    </>
  );
}
