/**
 * @fileoverview Track import should have an absolute import
 * @author track-should-have-absolute-import
 */
'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/apiData-should-have-absolute-import'),
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
ruleTester.run('apiData-should-have-absolute-import', rule, {
  valid: [
    "import apiData from 'apiData'",
    "import apiData from './apiData'",
    "import { someimport } from 'apiData';",
    "import apiData, { lol } from 'apiData';",
  ],

  invalid: [
    {
      code: `import apiData from '../apiData';`,
      errors: [
        {
          message: 'apiData module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import apiData, { someimport } from '../apiData';`,
      errors: [
        {
          message: 'apiData module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import { someimport } from '../apiData';`,
      errors: [
        {
          message: 'apiData module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import apiData from '../../../../apiData';`,
      errors: [
        {
          message: 'apiData module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import apiData from '../../../../models/apiData';`,
      errors: [
        {
          message: 'apiData module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    }
  ]
});
