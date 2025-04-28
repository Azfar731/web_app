import Intro from "~/components/Intro";
import type { Route } from "./+types/home";
import About_section from "~/components/About";
import Clients_section from "~/components/Clients";
import Contact_section from "~/components/Contact";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Khalil & Khalil – Leading Law Firm in Phalia, Pakistan" },

    // Standard metadata
    {
      name: "description",
      content:
        "Khalil & Khalil is a premier law firm based in Phalia, Pakistan, offering expert legal services in corporate law, litigation, property law, and family law.",
    },
    {
      name: "keywords",
      content:
        "law firm, legal services, Phalia, Pakistan, corporate law, litigation, property law, family law, attorney",
    },
    { name: "author", content: "Khalil & Khalil" },
    {
      property: "og:title",
      content: "Khalil & Khalil – Leading Law Firm in Phalia, Pakistan",
    },
    {
      property: "og:description",
      content:
        "Providing comprehensive legal representation and counsel in Phalia, Pakistan across corporate, civil, and family law matters.",
    },
    { property: "og:image", content: "/assets/og_logo_jpg.jpg" },
    { property: "og:locale", content: "en_PK" },

    // Twitter Cards
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@KhalilandKhalil" },
    {
      name: "twitter:title",
      content: "Khalil & Khalil – Law Firm in Phalia, Pakistan",
    },
    {
      name: "twitter:description",
      content:
        "Expert legal counsel in Phalia, Pakistan specializing in corporate law, litigation, property and family matters.",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <Intro />
      <About_section />
      <Clients_section />
      <Contact_section />
      <Footer />
    </div>
  );
}
