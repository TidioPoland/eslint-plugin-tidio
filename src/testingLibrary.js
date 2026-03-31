import testingLibraryPlugin from "eslint-plugin-testing-library";

const testingLibrary = [
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: {
      "testing-library": testingLibraryPlugin,
    },
    rules: {
      "testing-library/await-async-queries": "error",
      "testing-library/await-async-utils": "error",
      "testing-library/no-wait-for-side-effects": "error",
      "testing-library/await-async-events": "error",
      "testing-library/prefer-user-event": "error",
      "testing-library/no-unnecessary-act": 0,
      "testing-library/no-debugging-utils": "error",
      "testing-library/no-await-sync-queries": "error",
      "testing-library/no-await-sync-events": "error",
    },
  },
];

export default testingLibrary;
