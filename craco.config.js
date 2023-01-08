const CracoLessPlugin = require("craco-less");
const webpack = require("webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  devServer: {
    compress: true,
    host: "localhost",
    port: 8888,
    open: false,
    client: {
      overlay: true,
    },
    proxy: {
      "/dev": {
        target: "http://codercba.com:1888/airbnb/api",
        changOrigin: true,
        pathRewrite: { "^/dev": "" },
      },
    },
  },
  webpack: {
    alias: {
      "@": resolve("src"),
      // "@mui/styled-engine": "@mui/styled-engine-sc",
      components: resolve("src/components"),
    },
    plugins: {
      add: [
        new webpack.DefinePlugin({
          "process.env.SOON_SEVEN": JSON.stringify(process.env.SOON_SEVEN),
        }),
      ],
    },
    configure: (webpackConfig, { env, paths }) => {
      if (env === "development") {
        webpackConfig.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "server",
            analyzerHost: "127.0.0.1",
            analyzerPort: 7777,
            openAnalyzer: false, // 构建完打开浏览器
            reportFilename: path.resolve(__dirname, `analyzer/index.html`),
          })
        );
      }
      webpackConfig.externals = {
        ...webpackConfig.externals,
        react: "React",
        "react-dom": "ReactDOM",
      };
      webpackConfig.output = {
        ...webpackConfig.output,
        chunkFilename: "static/js/[name].chunk.js",
        clean: true,
      };
      return webpackConfig;
    },
  },
};
