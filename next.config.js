const isGithubActions = process.env.GITHUB_ACTIONS || false;

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
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
        loader: "imgix", // You can change the loader based on your requirement
        path: "",
    },
    experimental: {
        appDir: true,
    },
    future: { webpack5: true },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias.canvas = false;
        config.resolve.alias.encoding = false;
        return config;
    },
};

module.exports = nextConfig;
