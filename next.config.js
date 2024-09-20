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
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: { unoptimized: true },
    webpack: (config) => {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        };
        config.resolve.fallback = {
            process: require.resolve("process/browser"),
            zlib: require.resolve("browserify-zlib"),
            stream: require.resolve("stream-browserify"),
            util: require.resolve("util"),
            buffer: require.resolve("buffer"),
            asset: require.resolve("assert"),
        };
        config.externals.push({
            sharp: "commonjs sharp",
            canvas: "commonjs canvas",
        });
        config.plugins.push(
            new webpack.ProvidePlugin({
                Buffer: ["buffer", "Buffer"],
                process: "process/browser",
            })
        );
        return config;
    },
};

module.exports = nextConfig;
