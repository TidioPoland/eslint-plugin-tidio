import tidioRulesPlugin from "@tidio/eslint-plugin-rules";

const translations = [
  {
    plugins: {
      "@tidio/rules": tidioRulesPlugin,
    },
    rules: {
      "@tidio/rules/import-from-lang-always-trans": 2,
      "@tidio/rules/eslint-plugin-disallow-literals-as-direct-jsxelement-children": 2,
      "@tidio/rules/no-trans-in-tests": 2,
    },
  },
];

export default translations;
