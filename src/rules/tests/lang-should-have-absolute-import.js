/**
 * @fileoverview Lang import should have an absolute import
 * @author lang-should-have-absolute-import
 */
'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/lang-should-have-absolute-import'),
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
ruleTester.run('lang-should-have-absolute-import', rule, {
  valid: [
    "import trans from 'lang'",
    "import trans from './lang'",
    "import { doesTranslationExist } from 'lang';",
    "import trans, { doesTranslationExist } from 'lang';",
    "import nothingReally from '../modals/langDE';",
    "import nothingReally from '../langPL';"
  ],

  invalid: [
    {
      code: `import trans from '../lang';`,
      errors: [
        {
          message: 'lang module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import trans, { doesTranslationExist } from '../lang';`,
      errors: [
        {
          message: 'lang module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import { doesTranslationExist } from '../lang';`,
      errors: [
        {
          message: 'lang module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import trans from '../../../../lang';`,
      errors: [
        {
          message: 'lang module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    }
  ]
});
