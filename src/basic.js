const basic = {
  plugins: [
    "@tidio/eslint-plugin-tidio-additional-rules",
    "@typescript-eslint",
    "eslint-comments",
    "prettier",
  ],
  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": "error",
    // Tidio additional rules
    "@tidio/tidio-additional-rules/return-no-semi": 2,
    "@tidio/tidio-additional-rules/eslint-plugin-disallow-keycodes-without-constants": 2,
    "@tidio/tidio-additional-rules/eslint-plugin-disallow-single-sign-variable-in-arrow-expressions": 2,
    "@tidio/tidio-additional-rules/curly-no-single-line-without-braces-overwrite": 2,
    "@tidio/tidio-additional-rules/enum-declaration-pascal-case": 2,
    "@tidio/tidio-additional-rules/enum-members-should-be-uppercase": 2,
    "@tidio/tidio-additional-rules/no-unnecessary-template-strings": 2,
    "@tidio/tidio-additional-rules/prefer-function-declaration-in-actions": 2,
    // Eslint comments rules
    "eslint-comments/no-aggregating-enable": 2, // disallows eslint-enable comments for multiple eslint-disable comments
    "eslint-comments/no-unlimited-disable": 2, // disallows eslint-disable comments without rule names
    "eslint-comments/no-unused-disable": 2, // disallow disables that don't cover any errors
    "eslint-comments/no-unused-enable": 2, // // disallow enables that don't enable anything or enable rules that weren't disabled
    "eslint-comments/no-duplicate-disable": 2,
    "eslint-comments/disable-enable-pair": 2,
    // Typescript
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": 2,
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": 2,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    "no-redeclare": 0,
    "@typescript-eslint/no-redeclare": 2,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/prefer-optional-chain": 2,
    "@typescript-eslint/explicit-module-boundary-types": 0, // we want all functions to be typed with explicit-function-return-type
    "@typescript-eslint/no-explicit-any": 2, // no any, comment if really needed

    // Others
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
    "no-implicit-coercion": [
      "error",
      { boolean: true, number: false, string: false },
    ],
    "no-console": 2,
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

    // enable for..of rule from airbnb ruleset
    // https://github.com/airbnb/javascript/blob/1eadb93e377da1e56c3f91f26610e5d0a00738a9/packages/eslint-config-airbnb-base/rules/style.js#L337
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
    "default-param-last": 0,
    "@typescript-eslint/default-param-last": 2,
  },
  overrides: [
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
  ],
};

module.exports = basic;
