import servicesData from "~/data/services.json";
import Service_Card from "~/components/Service_card";
import Intro_Line from "~/components/Intro_Line";
import { FaScaleBalanced } from "react-icons/fa6";

export function meta() {
  return [
    /* ── Core ───────────────────────────────────────────── */
    {
      title:
        "Legal Services – Khalil & Khalil | Civil, Criminal, Family & Corporate Lawyers in Phalia, Pakistan",
    },
    {
      name: "description",
      content:
        "Browse Khalil & Khalil’s full spectrum of legal services: Civil, Criminal, Family, Corporate & Commercial, Cooperative & Property, and Intellectual Property law. Each area is handled by seasoned advocates committed to strategic, results‑oriented counsel in Phalia, Pakistan.",
    },
    {
      name: "keywords",
      content:
        "legal services, civil law, criminal law, family law, corporate law, commercial law, cooperative law, property law, intellectual property, trademark law, Phalia, Pakistan, Khalil & Khalil",
    },
    { name: "author", content: "Khalil & Khalil" },

    /* ── Open Graph ─────────────────────────────────────── */
    {
      property: "og:title",
      content:
        "Legal Services – Khalil & Khalil | Civil, Criminal, Family & Corporate Lawyers in Phalia, Pakistan",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:description",
      content:
        "Discover how Khalil & Khalil guides clients through civil disputes, criminal defense, family matters, corporate transactions, property issues, and IP protection—all under one roof.",
    },
    { property: "og:image", content: "/assets/og_logo_webp.webp" }, // update path as needed
    { property: "og:locale", content: "en_PK" },

    /* ── Twitter Cards ──────────────────────────────────── */
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@KhalilandKhalil" },
    {
      name: "twitter:title",
      content:
        "Legal Services – Khalil & Khalil | Civil, Criminal, Family & Corporate Lawyers",
    },
    {
      name: "twitter:description",
      content:
        "Explore the breadth of services offered by Khalil & Khalil, from civil litigation to IP protection, delivered with excellence and integrity.",
    },
    { name: "twitter:image", content: "/assets/og_services.webp" },
  ];
}

export default function Services() {
  const serviceCards = servicesData.map((service, index) => (
    <Service_Card
      key={index}
      title={service.title}
      imgSrc={service.img_src}
      description={service.description}
      direction={index % 2 === 0 ? "left" : "right"}
    />
  ));

  return (
    <div>
      <div
        className={`relative px-6 h-110 md:h-80 lg:h-100 xl:h-120 flex justify-center items-center text-white bg-[url('/images/vertical_backgrounds/services_page.webp')]  md:bg-[url('/images/panaromic_backgrounds/services_page.webp')]  bg-cover bg-center    `}
      >
        <div className={`absolute inset-0 bg-black/70 md:bg-black/70`}></div>
        <div className="relative text-center z-10">
          <h1 className=" text-4xl md:text-4xl font-Times-New-Roman font-semibold ">
            Services
          </h1>
        </div>
      </div>
      {/* <Header_Img
        title="Services"
        img_src={{
          sm: "/images/vertical_backgrounds/services_page.webp",
          md: "/images/panaromic_backgrounds/about_us.webp",
        }}
        inset={{ sm: 0, md: 0 }}
      /> */}
      <div className="bg-gray-100 pt-20 pb-12 md:pb-24 px-6 md:px-18 lg:px-24 xl:px-30 flex flex-col gap-8 text-gray-900 font-EBGaramond">
        <Intro_Line
          text="Khalil & Khalil provides results-driven legal services for individuals, businesses, and institutions, grounded in deep expertise in Pakistani law and judicial processes"
          Icon={FaScaleBalanced}
        />
        {serviceCards}
      </div>
    </div>
  );
}
