import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/aboutus", "routes/about_us.tsx"),
  route("/services", "routes/services.tsx"),  
  route("/members", "routes/members.tsx"),
  route("/members/:name", "routes/members_profile.tsx"),
] satisfies RouteConfig;
