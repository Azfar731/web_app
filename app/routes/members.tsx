import { Link } from "react-router";
import MemberCard from "~/components/MemberCard";
import membersData from "~/data/team.json";
import { RiTeamFill } from "react-icons/ri";



export function meta() {
  return [
    /* ── Core ───────────────────────────────────────────── */
    { title: "Our Team – Khalil & Khalil | Lawyers in Phalia, Pakistan" },
    {
      name: "description",
      content:
        "Meet the accomplished attorneys and legal professionals who drive Khalil & Khalil’s reputation for excellence across corporate, civil, property, and family law in Phalia, Pakistan.",
    },
    {
      name: "keywords",
      content:
        "Khalil & Khalil team, law firm members, attorneys, lawyers, legal professionals, corporate lawyers, civil litigation, Phalia, Pakistan",
    },
    { name: "author", content: "Khalil & Khalil" },

    /* ── Open Graph ─────────────────────────────────────── */
    {
      property: "og:title",
      content: "Our Team – Khalil & Khalil | Lawyers in Phalia, Pakistan",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:description",
      content:
        "Explore the experience and credentials of Khalil & Khalil’s diverse team of legal experts dedicated to delivering trusted counsel.",
    },
    { property: "og:image", content: "/assets/og_members.webp" }, // update path as needed
    { property: "og:locale", content: "en_PK" },

    /* ── Twitter Cards ──────────────────────────────────── */
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@KhalilandKhalil" },
    {
      name: "twitter:title",
      content: "Our Team – Khalil & Khalil | Lawyers in Phalia, Pakistan",
    },
    {
      name: "twitter:description",
      content:
        "Get to know the lawyers and professionals who uphold Khalil & Khalil’s commitment to excellence and client trust.",
    },
    { name: "twitter:image", content: "/assets/og_members.webp" },
  ];
}


export default function MembersPage() {
  const memberCards = membersData.map((member) => (
    <Link to={`/members/${member.name.replace(/ /g, "-")}`} key={member.name}>
      <MemberCard imgSrc={member.img} name={member.name} title={member.title} />
    </Link>
  ));

  return (
    <div>
      <div className="relative px-6 h-110 md:h-80 lg:h-100 xl:h-120 flex justify-center items-center text-white md:bg-[url('/images/panaromic_backgrounds/members_page.webp')] bg-[url('/images/vertical_backgrounds/members_page.webp')]  bg-cover bg-center    ">
        <div className="absolute inset-0 bg-black/80 md:bg-black/50"></div>
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-4xl font-Times-New-Roman font-semibold ">
            Members
          </h1>
        </div>
      </div>
      <div className="bg-gray-100 pt-20 ">
        <div className=" w-3/4 mx-auto flex flex-col items-center justify-center gap-4 text-center font-light">
          <div className="relative w-3/4 border-t border-goldFont">
            <div className="absolute top-0 left-1/2 w-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-full">
              <RiTeamFill className="w-5 h-5" />
            </div>
          </div>
          <p>
            Khalil & Khalil features a dynamic group of experienced attorneys
            with varied backgrounds, specialized legal expertise, keen business
            insight, and a dedication to collaborative client service.
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
