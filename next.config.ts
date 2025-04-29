import type { NextConfig } from "next";
const withTM = require("next-transpile-modules")([
  "@ant-design/icons-svg",
  "antd",
  "rc-util",
  "rc-picker",
  "rc-field-form",
  "rc-dialog",
  "rc-motion",
  "rc-table",
  "rc-upload",
  "rc-input",
  "rc-select",
  "rc-tooltip",
  "rc-pagination",
  "rc-slider",
]);

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withTM(nextConfig);
