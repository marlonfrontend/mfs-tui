const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "core",

        filename: "remoteEntry.js",

        remotes: {
          login: "login@http://localhost:8081/remoteEntry.js",
          // BillingInformation: "BillingInformation@http://localhost:8081/remoteEntry.js"
        }
      })
    ]
  },

  devServer: { port: 8080 }
};