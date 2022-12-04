const CracoLessPlugin = require("craco-less");

const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      // "@mui/styled-engine": "@mui/styled-engine-sc",
      components: resolve("src/components"),
    },
  },
};
