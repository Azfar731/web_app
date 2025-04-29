import { toTitleCase } from "~/utility/functions";

export default function MemberCard({
  imgSrc,
  name,
  title,
}: {
  imgSrc: string;
  name: string;
  title: string;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 flex flex-col items-center">
        <img
          src={imgSrc}
          alt={`${name} picture`}
          className="w-60 h-60 rounded-full object-cover border-2 border-gray-100"
        />
        <h3 className="mt-4 text-center text-xl font-semibold  text-goldFont">
          {toTitleCase(name)}
        </h3>
        <p className="mt-1 text-center text-sm font-medium text-darkBrown uppercase">
          {title}
        </p>
      </div>
    </div>
  );
}
