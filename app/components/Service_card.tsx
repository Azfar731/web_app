export default function ServiceCard({
  imgSrc,
  title,
  description,
  direction="left",
}: {
  imgSrc: string;
  title: string;
  description: string[];
  direction?: "left" | "right";
}) {
  return (
    <div className={`flex flex-col lg:flex-row lg:gap-8 lg:w-full ${direction === "right" ? "lg:flex-row-reverse" : ""}`}>
      {/* striped background */}
      <div className="relative w-full lg:w-1/2 aspect-square">
          <div
            className="
            absolute  top-0 right-0
            w-[90%] aspect-square 
            bg-[repeating-linear-gradient(45deg,_rgba(0,0,0,0.1)_0px,_rgba(0,0,0,0.1)_8px,_transparent_8px,_transparent_16px)]
          "
          />
          {/* main photo */}
          <img
            src={imgSrc}
            alt={title}
            className="absolute z-10 w-[90%] aspect-square left-0 bottom-0  rounded shadow-lg"
          />
      </div>

      {/* content box */}
      <div className="py-4 lg:w-1/2 flex flex-col items-start justify-center">
        <h3 className="font-semibold text-darkBrown text-3xl md:text-4xl font-Times-New-Roman mb-2">
          {title}
        </h3>
        {description.map((paragraph, index) => (
          <p key={index} className="text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
