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

  {
    plugins: {
      "@tidio/rules": tidioRulesPlugin,
      "react-hooks": reactHooksPlugin,
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

      "react-hooks/component-hook-factories": 2,
      "react-hooks/config": 2,
      "react-hooks/error-boundaries": 2,
      "react-hooks/gating": 2,
      "react-hooks/globals": 2,
      "react-hooks/immutability": 2,
      "react-hooks/incompatible-library": 2,
      "react-hooks/preserve-manual-memoization": 2,
      "react-hooks/purity": 1,
      // False positive — https://github.com/facebook/react/issues/34775
      "react-hooks/refs": 0,
      "react-hooks/set-state-in-effect": 2,
      "react-hooks/set-state-in-render": 2,
      // We very often pass components during rendering
      "react-hooks/static-components": "warn",
      "react-hooks/unsupported-syntax": 1,
      "react-hooks/use-memo": 2,
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
