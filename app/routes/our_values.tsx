import type { IconType } from "react-icons";
import { FaHandshake } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import {
  RiMedalFill,
  RiShieldCheckFill,
  RiHandHeartFill,
} from "react-icons/ri";
import Intro_Line from "~/components/Intro_Line";

export default function Our_Values() {
  const values = [
    {
      Icon: RiMedalFill,
      heading: "Excellence",
      text: "We uphold the highest standards in all aspects of our work. Every matter is approached with strategic focus, attention to detail, and a commitment to delivering outcomes that reflect our firm’s dedication to quality",
    },
    {
      Icon: RiShieldCheckFill,
      heading: "Integrity",
      text: "Our practice is rooted in honesty, transparency, and ethical responsibility. We represent our clients with unwavering loyalty while respecting the law and the institutions that uphold it.",
    },
    {
      Icon: RiHandHeartFill,
      heading: "COMMITMENT",
      text: "We take ownership of our clients' challenges as our own. Our team works with consistency, resilience, and discipline to ensure every case is handled with the attention and care it deserves.",
    },
    {
      Icon: FaHandshake,
      heading: "TRUST",
      text: "We value the confidence our clients place in us. Through clear communication and reliable counsel, we strive to earn and maintain trust that lasts beyond a single case or transaction.",
    },
  ];

  return (
    <div>
      <div className="relative px-6 h-110 md:h-80 lg:h-100 xl:h-120 flex justify-center items-center text-white md:bg-[url('/images/panaromic_backgrounds/our_values.webp')] bg-[url('/images/vertical_backgrounds/our_values.webp')]  bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70 md:bg-black/70"></div>
        <div className="relative text-center z-10">
          <h1 className=" text-4xl md:text-4xl font-Times-New-Roman font-semibold ">
            Our Values
          </h1>
        </div>
      </div>
      <main className="w-full pt-20 bg-white">
        <section className="bg-white px-6  pb-20 mx-auto flex flex-col items-center justify-center gap-8 text-center">
          <div className=" w-3/4 mx-auto flex flex-col items-center justify-center gap-4 text-center font-light">
            <div className="relative w-3/4 border-t border-goldFont">
              <div className="absolute top-0 left-1/2 w-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
                <FaScaleBalanced className="w-5 h-5" />
              </div>
            </div>
            <p className="font-EBGaramond">
              Driven by{" "}
              <span className="font-semibold text-darkBrown ">
                <span className="text-lg">E</span>xcellence
              </span>
              . Grounded in{" "}
              <span className="font-semibold text-bronze">
                <span className="text-lg">I</span>ntegrity
              </span>
              . Committed to{" "}
              <span className="font-semibold text-lightBrown ">
                <span className="text-lg">Y</span>ou
              </span>
              .
            </p>
          </div>

          <div id="card-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  Icon={value.Icon}
                  heading={value.heading}
                  text={value.text}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Card({
  Icon,
  heading,
  text,
}: {
  Icon: IconType;
  heading: string;
  text: string;
}) {
  return (
    <div className="pt-8 pb-12 px-4  bg-gray-100 rounded-lg border-b-8 border-bronze  flex flex-col items-center justify-center gap-4 text-center">
      <Icon className="w-16 h-16 text-bronze" />
      <h3 className="text-2xl font-Cinzel text-darkBrown">{heading}</h3>
      <p className="text-justify font-EBGaramond">{text}</p>
    </div>
  );
}
