'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-helpers-in-store'),
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
ruleTester.run('no-helpers-in-store', rule, {
  valid: [
    {
      code: `import Something from 'helpers'`,
      filename: 'packages/webApp/Main.jsx',
    },
  ],

  invalid: [
    {
      code: `import Something from 'helpers'`,
      filename: 'packages/store/index.js',
      errors: [
        {
          message: `Nothing from 'helpers/...' should be imported in 'store'`,
          type: 'ImportDeclaration',
        },
      ],
    },
  ],
});
