const basic = require("./basic");

const react = {};
react.plugins = Object.assign([], basic.plugins);
react.plugins.push("eslint-plugin-react-compiler", "react-hooks", "react");

react.extends = Object.assign([], basic.extends);
react.extends = react.extends.map((extend) => {
  if (extend === "airbnb-base") {
    return "airbnb";
  }
  return extend;
});

react.settings = Object.assign({}, basic.settings);
const reactRules = {
  // React
  "@tidio/rules/imports-order-for-less-files": 2,
  "@tidio/rules/imports-order-for-media-files": 2,
  "@tidio/rules/eslint-plugin-disallow-null-in-tenary-in-jsx": 2,
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "error",
  "react/no-danger": 2,
  "jsx-a11y/label-has-for": [
    2,
    {
      required: {
        some: ["nesting", "id"],
      },
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
  "react/destructuring-assignment": 0,
  "react/state-in-constructor": 0, // we are using babel so it is not necessary for us
  "jsx-a11y/control-has-associated-label": 0,
  "react/jsx-props-no-spreading": 0, // allow spreading
  "react/jsx-filename-extension": [
    2,
    {
      extensions: [".jsx", ".tsx"],
    },
  ],

  "react/function-component-definition": [
    2,
    {
      namedComponents: "arrow-function",
      unnamedComponents: "function-expression",
    },
  ],
  "react/jsx-no-useless-fragment": [
    2,
    {
      allowExpressions: true,
    },
  ],
  // Disable react/sort-comp as this is not necessary for us and fixing it can cause many errors
  "react/sort-comp": 0,
  "react-compiler/react-compiler": 2,
};

react.rules = Object.assign({}, basic.rules, reactRules);

const reactOverrides = [
  {
    files: ["**/*.jsx", "*.tsx"],
    rules: {
      "@tidio/rules/always-require-default-export": 2,
    },
  },
  {
    files: [
      "*.mocks.jsx",
      "*.mocks.tsx",
      "*.styles.jsx",
      "*.styles.tsx",
      "styles.jsx",
      "styles.tsx",
    ],
    rules: {
      "@tidio/rules/always-require-default-export": 0,
    },
  },
  {
    files: ["**/*.tsx", "**/*.ts"],
    rules: {
      "react/require-default-props": [
        0,
        {
          forbidDefaultForRequired: false,
          ignoreFunctionalComponents: true,
        },
      ],
      "react/default-props-match-prop-types": [
        0,
        {
          allowRequiredDefaults: true,
        },
      ],
      "react/prop-types": 0,
    },
  },
];

react.overrides = [...basic.overrides, ...reactOverrides];

module.exports = react;
