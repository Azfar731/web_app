import Brand_Logos from "./Brand_logos";
import clientData from "~/data/clients.json"
export default function Clients_section() {
 

  return (
    <div
      id="Clients-section"
      className="py-12 bg-white flex flex-col justify-center items-center"
    >
      <h2 className="text-gray-800 text-4xl uppercase font-Cinzel">
        Trusted By
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 xl:gap-14 mt-8 px-4">
        {clientData.map((client, index) => (
          <Brand_Logos key={index} src={client.src} alt={client.alt} />
        ))}
      </div>
    </div>
  );
}
