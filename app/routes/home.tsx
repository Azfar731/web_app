import Intro from "~/components/Intro";
import type { Route } from "./+types/home";
import About_section from "~/components/About";
import Clients_section from "~/components/Clients";
import Contact_section from "~/components/Contact";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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
