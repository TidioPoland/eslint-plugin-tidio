import { FlatCompat } from "@eslint/eslintrc";
import tsESLint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintCommentsPlugin from "@eslint-community/eslint-plugin-eslint-comments";
import tidioRulesPlugin from "@tidio/eslint-plugin-rules";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export const coreRules = [
  ...tsESLint.configs.recommended,
  {
    plugins: {
      "@tidio/rules": tidioRulesPlugin,
      "@eslint-community/eslint-comments": eslintCommentsPlugin,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "@tidio/rules/return-no-semi": 2,
      "@tidio/rules/eslint-plugin-disallow-keycodes-without-constants": 2,
      "@tidio/rules/eslint-plugin-disallow-single-sign-variable-in-arrow-expressions": 2,
      "@tidio/rules/curly-no-single-line-without-braces-overwrite": 2,
      "@tidio/rules/enum-declaration-pascal-case": 2,
      "@tidio/rules/enum-members-should-be-uppercase": 2,
      "@tidio/rules/no-unnecessary-template-strings": 2,
      "@tidio/rules/prefer-function-declaration-in-actions": 2,

      "@eslint-community/eslint-comments/no-aggregating-enable": 2,
      "@eslint-community/eslint-comments/no-unlimited-disable": 2,
      "@eslint-community/eslint-comments/no-unused-disable": 2,
      "@eslint-community/eslint-comments/no-unused-enable": 2,
      "@eslint-community/eslint-comments/no-duplicate-disable": 2,
      "@eslint-community/eslint-comments/disable-enable-pair": 2,

      "no-use-before-define": 0,
      "no-shadow": 0,
      "no-unused-vars": 0,
      "no-redeclare": 0,
      "default-param-last": 0,

      "@typescript-eslint/no-use-before-define": 2,
      "@typescript-eslint/no-shadow": 2,
      "@typescript-eslint/no-redeclare": 2,
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/prefer-optional-chain": 2,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/no-explicit-any": 2,
      "@typescript-eslint/default-param-last": 2,
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true },
      ],

      "import/no-extraneous-dependencies": [
        2,
        {
          devDependencies: [
            "**/*.test.**",
            "**/*.test-utils.**",
            "**/*.spec.**",
            "**/*.stories.**",
            "**/webpack.**",
          ],
        },
      ],
      "import/extensions": [
        2,
        "always",
        {
          js: "never",
          ts: "never",
          jsx: "never",
          tsx: "never",
        },
      ],

      "no-implicit-coercion": [
        "error",
        { boolean: true, number: false, string: false },
      ],
      "no-console": 2,
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "func-names": 2,
      "no-alert": 2,
    },
  },
  {
    files: ["**/*.tsx", "**/*.ts"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": 2,
      "@typescript-eslint/no-non-null-assertion": 2,
      camelcase: 0,
    },
  },
  {
    files: ["**/*.js", "**/*.ts"],
    rules: {
      "import/prefer-default-export": 0,
    },
  },
];

const basic = [
  ...compat.extends("airbnb-base"),
  ...coreRules,
  eslintPluginPrettierRecommended,
];

export default basic;
