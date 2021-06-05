const path = require("path");
module.exports = {
  devServer: {
    proxy: "http://localhost:8080",
  },
  outputDir: path.resolve(__dirname, "../server/public"),
  transpileDependencies: ["vuetify"],
};
