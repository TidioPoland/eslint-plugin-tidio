/**
 * @fileoverview Prevent using return;
 * @author Grzegorz Dominiczak
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/return-no-semi'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('return-no-semi', rule, {
  valid: [
    'function foo() { return true; }',
    'function foo() { return false; }',
    'function foo() { return undefined; }'
  ],

  invalid: [
    {
      code: 'function foo() { return; }',
      errors: [
        {
          message: 'Prefer using explicit return instead of return;',
          type: 'ReturnStatement'
        }
      ]
    }
  ]
});
