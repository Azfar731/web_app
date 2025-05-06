import type { IconType } from "react-icons";

export default function IntroLine({
  Icon,
  text,
}: {
  Icon: IconType;
  text: string;
}) {
  return (
    <div className=" w-3/4 mx-auto flex flex-col items-center justify-center gap-4 text-center font-light">
      <div className="relative w-3/4 border-t border-goldFont">
        <div className="absolute top-0 left-1/2 w-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-full">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}
