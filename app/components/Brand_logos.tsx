import { useState } from "react";

export default function Brand_Logos({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [isColored, setIsColored] = useState(false);
  return (
    <div
      onClick={() => setIsColored((prev) => !prev)}
      className=" bg-white  rounded-2xl shadow-md p-2 w-40 h-32 flex items-center justify-center"
    >
      <img
        src={src}
        alt={alt}
        className={`max-h-full max-w-full object-contain lg:grayscale lg:hover:grayscale-0  transition duration-200
        ${isColored ? "max-lg:grayscale-0" : "max-lg:grayscale"} `}
      />
    </div>
  );
}
