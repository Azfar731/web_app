import Brand_Logos from "./Brand_logos";

export default function Clients_section() {
  const clients = [
    { src: "/assets/HBL-logo.png", alt: "HBL Logo" },
    { src: "/assets/Easypaisa-logo.png", alt: "Easy paisa logo" },
    { src: "/assets/meezan-bank-logo.png", alt: "Meezan bank logo" },
    { src: "/assets/Easypaisa-logo.png", alt: "Easy paisa logo" },
    { src: "/assets/HBL-logo.png", alt: "HBL Logo" },
    { src: "/assets/meezan-bank-logo.png", alt: "Meezan bank logo" },
    { src: "/assets/Easypaisa-logo.png", alt: "Easy paisa logo" },
    { src: "/assets/HBL-logo.png", alt: "HBL Logo" },
  ];

  return (
    <div
      id="Clients-section"
      className="py-12 bg-white flex flex-col justify-center items-center"
    >
      <h2 className="text-gray-800 text-4xl uppercase font-Cinzel">
        Trusted By
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 xl:gap-14 mt-8 px-4">
        {clients.map((client) => (
          <Brand_Logos src={client.src} alt={client.alt} />
        ))}
      </div>
    </div>
  );
}
