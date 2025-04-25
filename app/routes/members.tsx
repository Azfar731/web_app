import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/members";
import membersData from "~/data/team.json";

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
      <div className="flex flex-col items-center justify-center gap-8 ">
        <img
          src={memberData.img}
          className="max-h-screen"
          alt={`${memberData.name}'s profile picture`}
        />
        <div className="flex flex-col text-black">
          <h2>{memberData.title}</h2>
          <h1 className="text-2xl font-bold">{memberData.name}</h1>
          {memberData.description.map((desc, index) => (
            <p key={index} className="text-gray-600">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
