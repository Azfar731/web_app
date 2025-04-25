import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/members";
import membersData from "~/data/team.json";
import { toTitleCase } from "~/utility/functions";
import Contact_section from "~/components/Contact";
import Footer from "~/components/Footer";

export async function loader({ params }: LoaderFunctionArgs) {
  const { name } = params;
  if (!name) {
    throw new Response("Not Found", { status: 404 });
  }
  const formattedName = name.replace(/-/g, " ");
  const memberData = membersData.find(
    (member) => member.name === formattedName
  );
  if (!memberData) {
    throw new Response("Not Found", { status: 404 });
  }
  return { memberData };
}

export function meta({ data }: Route.MetaArgs) {
  const { memberData } = data;
  const name = toTitleCase(memberData.name)
  const pageTitle = `${name} – ${memberData.title} | Khalil & Khalil`;
  const description = `${name}, ${memberData.title} at Khalil & Khalil in Phalia, Pakistan. ${memberData.description[0]}`;
  
  const keywords = [
    name,
    memberData.title,
    "Khalil & Khalil",
    "law firm",
    "Phalia",
    "Pakistan",
  ].join(", ");

  const image = memberData.img ?? "/team/default-profile.jpg";

  return [
    // Title & description
    { title: pageTitle },
    { name: "description", content: description },
    { name: "keywords", content: keywords },

    // Author & viewport (if you want it per-page)
    { name: "author", content: name },
    { name: "viewport", content: "width=device-width, initial-scale=1" },

    // Open Graph
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:locale", content: "en_PK" },

    // Twitter Cards
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@KhalilandKhalil" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export default function MemberPage({ loaderData }: Route.ComponentProps) {
  const { memberData } = loaderData;
  console.log("Member Data", memberData);
  return (
    <div>
      <div className="px-6 md:px-12 lg:px-32 xl:px-64 py-20 pt-32 bg-white min-h-screen">
        <div className="pb-10 flex flex-col md:flex-row  items-center md:items-start justify-center gap-8 border-b border-black ">
          <img
            src={memberData.img}
            className="max-h-screen md:h-100"
            alt={`${memberData.name}'s profile picture`}
          />
          <div className="flex flex-col gap-3 text-black">
            <h2 className="text-gray-400 font-Cinzel">{memberData.title}</h2>
            <h1 className="text-3xl  text-bronze font-Cinzel">
              {toTitleCase(memberData.name)}
            </h1>

            {memberData.description.map((desc, index) => {
              const firstLetter = desc.charAt(0).toUpperCase();
              const restOfString = desc.slice(1).toLowerCase();
              return (
                <p key={index} className="text-gray-900 font-EBGaramond">
                  <span className={index === 0 ? `text-5xl text-bronze` : ""}>
                    {firstLetter}
                  </span>
                  {restOfString}
                </p>
              );
            })}
          </div>
        </div>

        <div className="border-b border-black pt-6 pb-10">
          {memberData.info.map((info, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-EBGaramond text-gray-700 font-bold mb-2">
                {info.heading}
              </h3>
              <ul className="list-disc pl-5 ">
                {info.points.map((point, i) => (
                  <li key={i} className="font-EBGaramond text-gray-600">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div id="contact">
          {memberData.contact && (
            <div className="py-10">
              <h3 className="font-EBGaramond text-gray-700 font-bold">
                Contact Information
              </h3>
              {Object.entries(memberData.contact).map(([key, value]) => (
                <div key={key} className="flex gap-2 mb-2">
                  <span className="font-EBGaramond text-gray-700 capitalize">
                    {key}:
                  </span>
                  <span className="font-EBGaramond text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Contact_section />
      <Footer />
    </div>
  );
}
