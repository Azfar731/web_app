export default function About_section() {
  return (
    <>
      <div className="pt-12 bg-white flex flex-col justify-center items-center">
        <h2 className="text-gray-800 text-4xl uppercase font-Cinzel ">
          Our Expertise
        </h2>
        <div className="mt-4 px-6 py-12 bg-gray-200 w-full">
          <h3 className="font-Abril text-2xl text-bronze">Focus</h3>
          <p className="pt-3 text-gray-800 text-xl font-EBGaramond font-medium">
            Our daily focus is on taxation and we use that expertise to deliver
            results for taxpayers of all types. Our team has over 100 years of
            combined experience and we are nationally and internationally
            recognized for our expertise in tax litigation.
          </p>
        </div>
        <div className="px-6 py-12 bg-charcoal w-full">
          <h3 className="font-Abril text-2xl text-bronze">Services</h3>
          <p className="pt-3 text-gray-100 text-xl font-EBGaramond font-medium">
            Tax Litigation &amp; Tax Controversy – We represent taxpayers in
            complex federal tax litigation and criminal tax cases. Matters
            include conservation easements, captive insurance, estate taxes,
            employment taxes, promoter penalties, preparer penalties, and all
            other civil tax penalties. We also represent taxpayers in federal
            tax controversies over payroll taxes, tax liens, tax levies, and
            unfiled returns.
          </p>
        </div>
        <div className="px-6 py-12 bg-gray-200 w-full">
          <h3 className="font-Abril text-2xl text-bronze">
            Tax Estate & Planning
          </h3>
          <p className="pt-3 text-gray-800 text-xl font-EBGaramond font-medium">
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
