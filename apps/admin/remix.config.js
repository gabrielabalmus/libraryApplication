/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  ignoredRouteFiles: ["**/.*"],
  watchPaths: ['../../packages'],
  browserBuildDirectory: "public/build",
  serverBuildDirectory: "build",
  publicPath: "/build/",
};
