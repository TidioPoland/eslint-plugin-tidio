const storybook = {
  overrides: [
    {
      files: ["*.stories.*"],
      rules: {
        "@tidio/rules/eslint-plugin-disallow-literals-as-direct-jsxelement-children": 0,
        "import/no-extraneous-dependencies": 0,
      },
    },
  ],
};

module.exports = storybook;
