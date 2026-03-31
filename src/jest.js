import jestPlugin from "eslint-plugin-jest";

const jest = [
  jestPlugin.configs["flat/recommended"],
  jestPlugin.configs["flat/style"],
];

export default jest;
