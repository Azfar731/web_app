import type { Config } from "@react-router/dev/config";
import membersData from "/app/data/team.json";

const dynamicRoutes = membersData.map((member) => {
  const name = member.name.replace(/ /g, "-").toLowerCase();
  return `/members/${name}`;
});
export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender: ["/", "/members", "aboutus", ...dynamicRoutes],
} satisfies Config;
