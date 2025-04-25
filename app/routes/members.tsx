import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/members";
import membersData from "~/data/team.json";
import { toTitleCase } from "~/utility/functions";

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

export default function MemberPage({ loaderData }: Route.ComponentProps) {
  const { memberData } = loaderData;
  console.log("Member Data", memberData);
  return (
    <div className="px-6 py-20 pt-32 bg-white min-h-screen">
      <div className="pb-10 flex flex-col items-center justify-center gap-8 border-b border-black ">
        <img
          src={memberData.img}
          className="max-h-screen"
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
        {
            memberData.contact && (
                <div className="py-10">
                    <h3 className="font-EBGaramond text-gray-700 font-bold">Contact Information</h3>
                    {Object.entries(memberData.contact).map(([key, value]) => (
                        <div key={key} className="flex gap-2 mb-2">
                            <span className="font-EBGaramond text-gray-700 capitalize">{key}:</span>
                            <span className="font-EBGaramond text-gray-600">{value}</span>
                        </div>
                    ))}
                </div>
            )
        }
      </div>
    </div>
  );
}
