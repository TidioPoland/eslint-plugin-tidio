'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-browser-globals-in-store-and-utils'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
RuleTester.setDefaultConfig({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});
var ruleTester = new RuleTester();
ruleTester.run('no-browser-globals-in-store-and-utils', rule, {
  valid: [
    {
      code: `localStorage.getItem('no-browser-globals-in-store-and-utils')`,
      filename: 'packages/webApp/Main.jsx',
    },
  ],

  invalid: [
    {
      code: `localStorage.getItem('no-browser-globals-in-store-and-utils')`,
      filename: 'packages/store/index.js',
      errors: [
        {
          message: `Unexpected use of localStorage.`,
          type: 'Identifier',
        },
      ],
    },
    {
      code: `window.open('http://localhost:8080/packages/store')`,
      filename: 'packages/utils/api/index.js',
      errors: [
        {
          message: `Unexpected use of window.`,
          type: 'Identifier',
        },
      ],
    },
  ],
});
