import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const emotionPlugin = require("@emotion/eslint-plugin");

const emotion = [
  {
    plugins: {
      "@emotion": emotionPlugin,
    },
    rules: {
      "@emotion/jsx-import": 0,
      "@emotion/no-vanilla": "error",
      "@emotion/import-from-emotion": "error",
      "@emotion/styled-import": "error",
      "@emotion/syntax-preference": [2, "object"],
    },
  },
];

export default emotion;
