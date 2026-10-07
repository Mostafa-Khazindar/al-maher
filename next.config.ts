import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";
const repoName = "/al-maher";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoName,
  assetPrefix: repoName,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
