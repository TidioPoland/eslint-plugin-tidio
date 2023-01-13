'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/always-require-default-export'),
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
ruleTester.run('always-require-default-export', rule, {
  valid: ['export const func1 = () => {};function func2(){};export default func1;'],

  invalid: [
    {
      code: `export const func1 = () => {};function func2(){}; export const func3=()=>{}`,
      errors: [
        {
          message: 'There should be a default export in this file',
          type: 'Program'
        }
      ]
    }
  ]
});
