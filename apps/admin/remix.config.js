/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  ignoredRouteFiles: ["**/.*"],
  watchPaths: ['../../packages'],
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
};
