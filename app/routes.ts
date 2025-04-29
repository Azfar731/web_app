import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/members/:name", "routes/members_profile.tsx"),
] satisfies RouteConfig;
