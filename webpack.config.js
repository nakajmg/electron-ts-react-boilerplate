const path = require("path")

module.exports = {
  target: "electron-renderer",
  entry: {
    main: "./src/main.ts",
  },
  cache: true,
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
}
