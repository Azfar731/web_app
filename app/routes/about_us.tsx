import type { IconType } from "react-icons";
import { FaHandshake } from "react-icons/fa";
import {
  RiMedalFill,
  RiShieldCheckFill,
  RiHandHeartFill,
} from "react-icons/ri";

export function meta() {
  return [
    /* ── Core ───────────────────────────────────────────── */
    { title: "About Us – Khalil & Khalil | Law Firm in Phalia, Pakistan" },
    {
      name: "description",
      content:
        "Discover Khalil & Khalil’s story, our team’s dedication to legal excellence, and the core values—Excellence, Integrity, Commitment, and Trust—that guide every matter we handle in Phalia, Pakistan.",
    },
    {
      name: "keywords",
      content:
        "about Khalil & Khalil, law firm values, legal excellence, integrity, commitment, trust, legal team, Phalia, Pakistan",
    },
    { name: "author", content: "Khalil & Khalil" },

    /* ── Open Graph ─────────────────────────────────────── */
    {
      property: "og:title",
      content: "About Us – Khalil & Khalil | Law Firm in Phalia, Pakistan",
    },
    { property: "og:type", content: "article" },
    {
      property: "og:description",
      content:
        "Learn about the foundation and guiding principles of Khalil & Khalil. Meet the team that delivers trusted, high‑caliber legal representation across corporate, civil, and family matters.",
    },
    { property: "og:image", content: "/assets/og_about_us.webp" }, // adjust path/name
    { property: "og:locale", content: "en_PK" },

    /* ── Twitter Cards ──────────────────────────────────── */
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@KhalilandKhalil" },
    {
      name: "twitter:title",
      content: "About Us – Khalil & Khalil | Law Firm in Phalia, Pakistan",
    },
    {
      name: "twitter:description",
      content:
        "Get to know our story and the values that drive Khalil & Khalil’s commitment to outstanding legal service.",
    },
    { name: "twitter:image", content: "/assets/og_about_us.webp" }, // same image or a tailored one
  ];
}

export default function AboutUsPage() {
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
      <div className="relative px-6 h-110 md:h-80 lg:h-100 xl:h-120 flex justify-center items-center text-white md:bg-[url('/images/about_us_desktop.jpg')] bg-[url('/images/about_us_mobile.jpg')]  bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 md:bg-black/70"></div>
        <div className="relative text-center z-10">
          <h1 className=" text-4xl md:text-4xl font-Times-New-Roman font-semibold ">
            About Us
          </h1>
        </div>
      </div>
      <main className="w-full pt-20 bg-gray-100">
        <section className="px-6 pb-12 md:w-3/4 mx-auto flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-4xl font-Cinzel  text-darkBrown">
            Our <span className="text-bronze">Foundation</span>
          </h2>
          <p className="text-justify font-EBGaramond">
            <span className="text-5xl text-bronze">K</span>halil & Khalil is a
            distinguished law firm built on a foundation of legal excellence,
            integrity, and client trust. With a reputation for clarity,
            discretion, and commitment, we are recognized for delivering
            high-caliber legal representation across a broad spectrum of
            matters.
          </p>
          <p className="text-justify font-EBGaramond">
            Our strength lies not only in our legal expertise but also in our
            people — a team of dedicated professionals who bring precision,
            insight, and a forward-thinking approach to everything we do. We
            understand the complexities of the modern legal environment and are
            devoted to guiding our clients with clarity and confidence at every
            step.
          </p>
          <p className="text-justify font-EBGaramond">
            At Khalil & Khalil, we believe that the role of a law firm extends
            beyond transactions and disputes — we are partners in our clients'
            journeys, focused on building lasting relationships grounded in
            trust and performance.
          </p>
        </section>
        <section className="bg-white px-6 pt-12 pb-20 mx-auto flex flex-col items-center justify-center gap-8 text-center">
          <h2 className="text-4xl font-Cinzel  text-darkBrown">
            Our <span className="text-bronze">Values</span>
          </h2>
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
