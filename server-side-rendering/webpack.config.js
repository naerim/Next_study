const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader", // 모든 자바스크립트 파일을 babel-loader로 처리
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template/index.html",
    }),
  ],
  mode: "production",
};
