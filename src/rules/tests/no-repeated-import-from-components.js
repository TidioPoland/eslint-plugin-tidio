/**
 * @fileoverview components in "components" import should have index.ts to not have duplicated import paths
 * @author Jarosław Salwa
 */
'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-repeated-import-from-components'),
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
ruleTester.run('no-repeated-import-from-components', rule, {
  valid: [
    "import Component from 'components/Test';",
    "import Component from 'components/Test/SomeComponent';",
    "import Component from 'components/Test/Test2';",
    "import Component from './some/path/Test/Test';",
    "import Component from './some/path/Test/Test2';",
    "import Component from './some/path/Test';",
  ],

  invalid: [
    {
      code: `import SomeComponent from 'components/Test/Test';`,
      errors: [
        {
          message: 'Component "Test" should have index.ts file to have import like "components/Test"',
          type: 'ImportDeclaration'
        }
      ]
    },
  ]
});
