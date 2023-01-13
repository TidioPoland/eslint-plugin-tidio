/**
 * @fileoverview Track import should have an absolute import
 * @author track-should-have-absolute-import
 */
'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/components-should-have-absolute-import'),
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
ruleTester.run('components-should-have-absolute-import', rule, {
  valid: ["import Button from 'components/Button'"],

  invalid: [
    {
      code: `import Button from '../shared/components/Button';`,
      errors: [
        {
          message: 'components module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import Button from '../../../shared/components/Button';`,
      errors: [
        {
          message: 'components module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    }
  ]
});
