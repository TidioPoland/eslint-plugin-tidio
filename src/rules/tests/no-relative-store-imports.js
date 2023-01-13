'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-relative-store-imports'),
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
ruleTester.run('no-relative-store-imports', rule, {
  valid: [
    {
      code: `import Something from 'store'`,
      filename: 'packages/webApp/Main.jsx',
    },
  ],

  invalid: [
    {
        code: `import actions from './store'`,
        filename: 'packages/utils/index.js',
        errors: [
          {
            message: `Relative imports from store are not allowed. Use absolute import instead.`,
            type: 'ImportDeclaration',
          },
        ],
      },
    {
      code: `import actions from '../store'`,
      filename: 'packages/utils/index.js',
      errors: [
        {
          message: `Relative imports from store are not allowed. Use absolute import instead.`,
          type: 'ImportDeclaration',
        },
      ],
    },
    {
        code: `import { action } from '../store'`,
        filename: 'packages/webApp/shared/components/sth/index.js',
        errors: [
          {
            message: `Relative imports from store are not allowed. Use absolute import instead.`,
            type: 'ImportDeclaration',
          },
        ],
      },
      {
        code: `import Pope from '../../../../../store'`,
        filename: 'packages/webApp/panel/views/analytics/index.js',
        errors: [
          {
            message: `Relative imports from store are not allowed. Use absolute import instead.`,
            type: 'ImportDeclaration',
          },
        ],
      },
  ],
});
