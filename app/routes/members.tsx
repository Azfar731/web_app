import { Link } from "react-router";
import MemberCard from "~/components/MemberCard";
import membersData from "~/data/team.json";

export default function MembersPage() {
  const memberCards = membersData.map((member) => (
    <Link to={`/members/${member.name.replace(/ /g, "-")}`} key={member.name}>
      <MemberCard imgSrc={member.img} name={member.name} title={member.title} />
    </Link>
  ));

  return (
    <div>
      <div className="relative px-6 pt-42 xl:pt-60 pb-20 md:flex md:justify-center md:items-center text-white md:bg-[url('/images/team-page.jpg')] bg-[url('/images/team-page2.jpg')]  bg-cover bg-center    ">
        <div className="absolute inset-0 bg-black/80 md:bg-black/50"></div>
        <div className="relative lg:pb-15 lg:pl-20  z-10">
          <h1 className=" text-2xl md:text-4xl font-Times-New-Roman font-semibold ">
            Members
          </h1>
          <p className="pt-6 text-lg text-xl lg:w-3/4 font-EBGaramond ">
            Distinguished by the breadth of our experience and capabilities, our
            focus on client service is supported by a culture rooted in
            collaboration and caring.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 pt-20 ">
        <div className="w-3/4 mx-auto text-center font-light">
          <p>
            MTC boasts a team of multidisciplinary lawyers composed of
            individuals with diverse backgrounds, expertise in specialist legal
            fields, deep commercial awareness and a commitment to a
            collaborative approach.
          </p>
        </div>
        <div
          id="card-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-8"
        >
          {memberCards}
        </div>
      </div>
    </div>
  );
}
