import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/theme", "theme/route.ts")
] satisfies RouteConfig;
