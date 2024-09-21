const isGithubActions = process.env.GITHUB_ACTIONS || false;
var webpack = require("webpack");

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
    assetPrefix = `/${repo}/`;
    basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/nextjs-page",
    assetPrefix: "/nextjs-page",
    images: { unoptimized: true },
    webpack(config, { nextRuntime }) {
        if (nextRuntime === "nodejs") {
            config.resolve.alias.canvas = false;
        }

        return config;
    },
};

module.exports = nextConfig;
