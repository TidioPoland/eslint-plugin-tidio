const storybook = {
  overrides: [
    {
      files: ["*.stories.*"],
      rules: {
        "rulesdir/eslint-plugin-disallow-literals-as-direct-jsxelement-children": 0,
        "import/no-extraneous-dependencies": 0,
      },
    },
  ],
};

module.exports = storybook;
