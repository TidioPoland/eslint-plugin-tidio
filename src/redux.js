const redux = {
  overrides: [
    {
      files: ["actions.ts", "actionsTS.ts"],
      rules: {
        "tidio-additional-rules/require-const-in-action-creator-ts-function": 2,
        "@typescript-eslint/explicit-function-return-type": 0,
      },
    },
  ],
};

module.exports = redux;
