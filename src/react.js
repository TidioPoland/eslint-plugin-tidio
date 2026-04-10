import { FlatCompat } from "@eslint/eslintrc";
import tidioRulesPlugin from "@tidio/eslint-plugin-rules";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { coreRules } from "./basic.js";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const react = [
  ...compat.extends("airbnb"),
  ...coreRules,
  reactHooksPlugin.configs.flat["recommended-latest"],
  {
    plugins: {
      "@tidio/rules": tidioRulesPlugin,
    },
    rules: {
      "@tidio/rules/imports-order-for-less-files": 2,
      "@tidio/rules/imports-order-for-media-files": 2,
      "@tidio/rules/eslint-plugin-disallow-null-in-tenary-in-jsx": 2,

      "react/no-danger": 2,
      "react/destructuring-assignment": 0,
      "react/state-in-constructor": 0,
      "react/jsx-props-no-spreading": 0,
      "react/jsx-filename-extension": [2, { extensions: [".jsx", ".tsx"] }],
      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "function-expression",
        },
      ],
      "react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
      "react/sort-comp": 0,

      "jsx-a11y/label-has-for": [
        2,
        {
          required: { some: ["nesting", "id"] },
          allowChildren: true,
        },
      ],
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          labelComponents: [],
          labelAttributes: [],
          controlComponents: [],
          assert: "either",
          depth: 25,
        },
      ],
      "jsx-a11y/control-has-associated-label": 0,

      "react-hooks/exhaustive-deps": 2,
      "react-hooks/purity": 1,
      // False positive — https://github.com/facebook/react/issues/34775
      "react-hooks/refs": 0,
      // We very often pass components during rendering
      "react-hooks/static-components": 1,
    },
  },
  {
    files: ["**/*.jsx", "**/*.tsx"],
    rules: {
      "@tidio/rules/always-require-default-export": 2,
    },
  },
  {
    files: [
      "**/*.mocks.jsx",
      "**/*.mocks.tsx",
      "**/*.styles.jsx",
      "**/*.styles.tsx",
      "**/styles.jsx",
      "**/styles.tsx",
    ],
    rules: {
      "@tidio/rules/always-require-default-export": 0,
    },
  },
  {
    files: ["**/*.tsx", "**/*.ts"],
    rules: {
      "react/require-default-props": 0,
      "react/default-props-match-prop-types": 0,
      "react/prop-types": 0,
    },
  },

  eslintPluginPrettierRecommended,
];

export default react;
