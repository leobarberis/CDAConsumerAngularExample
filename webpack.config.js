const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const packageJson = require("./package.json");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "fe-obe-host",
    publicPath: "auto",
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        cda: "cda@http://localhost:3000/remoteEntry.js"
      },
      // shared: {
      //   "@angular/core": { singleton: true, strictVersion: true },
      //   "@angular/common": { singleton: true, strictVersion: true },
      //   "@angular/router": { singleton: true, strictVersion: true },
      //   ...packageJson.dependencies,
      // },
    }),
    sharedMappings.getPlugin(),
  ],
};
