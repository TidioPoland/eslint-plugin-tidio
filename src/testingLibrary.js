const testingLibrary = {
  plugins: ["testing-library"],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      rules: {
        "testing-library/await-async-query": "error",
        "testing-library/await-async-utils": "error",
        "testing-library/no-wait-for-side-effects": "error",
        "testing-library/no-await-sync-query": "error",
      },
    },
  ],
};

module.exports = testingLibrary;
