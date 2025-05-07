export default function Header_Img({
  img_src,
  title,
  inset,
}: {
  img_src: { sm: string; md: string };
  title: string;
  inset: { sm: number; md: number };
}) {
  return (
    <div
      className={`relative px-6 h-110 md:h-80 lg:h-100 xl:h-120 flex justify-center items-center text-white bg-[url('${img_src.sm}')]  md:bg-[url('${img_src.md}')] bg-cover bg-center`}
    >
      <div
        className={`absolute inset-0 bg-black/${inset.sm} md:bg-black/${inset.md}`}
      ></div>
      <div className="relative text-center z-10">
        <h1 className=" text-4xl md:text-4xl font-Times-New-Roman font-semibold ">
          {title}
        </h1>
      </div>
    </div>
  );
}
