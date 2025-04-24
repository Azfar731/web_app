import Brand_Logos from "./Brand_logos";

export default function Clients_section() {
  const clients = [
    { src: "/assets/HBL-logo.png", alt: "HBL Logo" },
    { src: "/assets/Easypaisa-logo.png", alt: "Easy paisa logo" },
    { src: "/assets/meezan-bank-logo.png", alt: "Meezan bank logo" },
  ];

  return (
    <div
      id="Clients-section"
      className="pt-12 bg-white flex flex-col justify-center items-center"
    >
      <h2 className="text-gray-800 text-4xl uppercase font-Cinzel">
        Trusted By
      </h2>
      <div className="grid grid-cols-2 gap-4 mt-8 px-4">
        {clients.map((client) => (
          <Brand_Logos src={client.src} alt={client.alt} />
        ))}
      </div>
    </div>
  );
}
