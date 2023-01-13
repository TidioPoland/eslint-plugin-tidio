'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/import-from-lang-always-trans'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
});
var ruleTester = new RuleTester();
ruleTester.run('import-from-lang-always-trans', rule, {
  valid: [
    'import trans from "lang";',
    'import trans, { test } from "lang";',
    'import { test } from "lang";'
  ],

  invalid: [
    {
      code: `import t from "lang";`,
      errors: [
        {
          message: 'Lang module should be imported as trans. Currently it is "t"',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import t, { test } from "lang";`,
      errors: [
        {
          message: 'Lang module should be imported as trans. Currently it is "t"',
          type: 'ImportDeclaration'
        }
      ]
    }
  ]
});
