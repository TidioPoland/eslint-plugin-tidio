const testingLibrary = {
  plugins: ["testing-library"],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      rules: {
        "testing-library/await-async-queries": "error",
        "testing-library/await-async-utils": "error",
        "testing-library/no-wait-for-side-effects": "error",
        "testing-library/await-async-events": "error",
        "testing-library/prefer-user-event": "error",
        // It might be beneficial to turn it on at some point
        "testing-library/no-unnecessary-act": 0,
        "testing-library/no-debugging-utils": "error",
        "testing-library/no-await-sync-queries": "error",
        "testing-library/no-await-sync-events": "error"
      },
    },
  ],
};

module.exports = testingLibrary;
