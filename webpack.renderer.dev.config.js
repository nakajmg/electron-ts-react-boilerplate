const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  target: "electron-renderer",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  entry: {
    main: "./src/pages/index.tsx",
  },
  cache: true,
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 2003,
    compress: true,
    noInfo: true,
    stats: "errors-only",
    inline: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
    before() {
      if (process.env.START_HOT) {
        console.log("Starting main process")
        spawn("npm", ["run", "start-main-dev"], {
          shell: true,
          env: process.env,
          stdio: "inherit",
        })
          .on("close", (code) => process.exit(code))
          .on("error", (spawnError) => console.error(spawnError))
      }
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    }),
  ],
}
