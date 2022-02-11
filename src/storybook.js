const storybook = {
  overrides: [
    {
      files: ["*.stories.*"],
      rules: {
        "tidio-additional-rules/eslint-plugin-disallow-literals-as-direct-jsxelement-children": 0,
        "import/no-extraneous-dependencies": 0,
      },
    },
  ],
};

module.exports = storybook;
