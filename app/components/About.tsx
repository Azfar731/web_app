export default function About_section() {
  return (
    <>
      <div
        id="about_section"
        className="pt-12 bg-gray-200 flex flex-col justify-center items-center scroll-mt-20"
      >
        
        <div className="mt-4 px-6 py-12 lg:max-xl:py-8 xl:pl-24 bg-gray-200 w-full lg:flex lg:items-center lg:justify-start lg:gap-8">
          <div className="relative w-128 h-52 max-lg:hidden">
            <img
              src="images/focus.jpg"
              className="w-128 absolute"
              alt="arbitrary image"
            />
          </div>
          <div>
            <h3 className="font-Abril text-2xl text-bronze">Mission</h3>
            <p className="pt-3 lg:w-128 text-gray-800 text-xl font-EBGaramond font-medium">
              Khalil & Khalil is a client-focused law firm committed to
              delivering strategic, clear, and results-driven legal counsel.
              With a foundation built on integrity and a reputation shaped by
              excellence, we serve individuals, businesses, and institutions
              across a wide spectrum of legal areas.
            </p>
          </div>
        </div>
        <div className="px-6 py-12 lg:pb-8 lg:pt-16 xl:pt-28 xl:pl-64 bg-charcoal w-full lg:flex lg:items-center lg:justify-start lg:gap-8">
          <div>
            <h3 className="font-Abril text-2xl text-bronze">Experties</h3>
            <p className="pt-3 lg:w-128 text-gray-100 text-xl font-EBGaramond font-medium">
              Our strength lies in our people — a team of dedicated
              professionals with deep legal knowledge and a forward-thinking
              approach. Whether it's a civil, criminal, family, or corporate
              matter, we tailor our legal strategies to meet the unique
              challenges and goals of each client.
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
          <h3 className="font-Abril text-2xl text-bronze">Partnership</h3>
          <p className="pt-3 lg:w-128 text-gray-800 text-xl font-EBGaramond font-medium">
            At Khalil & Khalil, we go beyond just legal representation. We build
            lasting relationships based on trust, communication, and consistent
            performance. Explore our services to see how we can support and
            safeguard your interests at every stage.
          </p>
        </div>
      </div>
    </>
  );
}
