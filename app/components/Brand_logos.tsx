import { useState } from "react";

export default function Brand_Logos({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className=" bg-white  rounded-2xl shadow-md p-2 w-40 h-32 flex items-center justify-center overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain transition duration-200
        `}
      />
    </div>
  );
}
