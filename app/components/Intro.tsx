export default function Intro() {
  return (
    <div className="relative overflow-hidden bg-introBg h-screen  px-6 pt-32 md:pt-42  xl:flex xl:items-center xl:justify-end xl:pr-32">
      <div className="absolute bottom-0 -right-0 xl:left-0  z-0">
        <img
          src="/assets/k_3.png"
          alt="K"
          className="w-[180px] md:w-[300px] lg:w-[400px] xl:w-[700px] object-contain"
        />
        {/* <span className="text-[200px] text-goldFont">K</span> */}
      </div>
      <div>
        <div className="inline-flex flex-col items-start justify-center text-6xl text-darkBrown font-Times-New-Roman font-bold">
          <h1>KHALIL</h1>
          <h1 className="text-goldFont w-full text-center">&</h1>
          <h1>KHALIL</h1>
        </div>
        <p className="pt-4 text-lightBrown w-2/3 md:w-100 lg:w-130 lg:text-xl">
          Future-focused and dedicated to excellence, Khalil & Khalil is an
          elite law firm that helps clients anticipate what is next and navigate
          a path to success.
        </p>
      </div>
    </div>
  );
}
