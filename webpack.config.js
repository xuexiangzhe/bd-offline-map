const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     template: path.resolve(__dirname, "index.html")
    // }),

    // new CopyWebpackPlugin({
    //     patterns:[
    //         {
    //           from: path.resolve(__dirname, "./modules"),
    //           to: "modules",
    //         },
    //         {
    //           from: path.resolve(__dirname, "./tiles"),
    //           to: "tiles",
    //         },
    //     ]
    // }),
  ],
};
