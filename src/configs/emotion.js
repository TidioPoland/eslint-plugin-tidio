const emotion = {
  plugins: ["@emotion"],
  rules: {
    "@emotion/jsx-import": 0,
    "@emotion/no-vanilla": "error",
    "@emotion/import-from-emotion": "error",
    "@emotion/styled-import": "error",
    "@emotion/syntax-preference": [2, "object"],
  },
};

module.exports = emotion;
