const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.tsx",
    css: "./src/_index.styl",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "awesome-typescript-loader"
        ],
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack learnig",
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    host: "localhost",
    open: true
  },
};