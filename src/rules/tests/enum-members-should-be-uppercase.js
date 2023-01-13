/**
 * @fileoverview Require enum members to be UPPERCASE
 * @author enum-members-should-be-uppercase.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/enum-members-should-be-uppercase'),
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
ruleTester.run('enum-members-should-be-uppercase', rule, {
  valid: [
    'enum Test { TESTNAME = "test" }',
    'enum Test { TESTNAME = "test", SECONDTEST = "Test2" }',
    'enum Test { TESTNAME11 = "test" }',
  ],

  invalid: [
    {
      code: 'enum Test { testname = "test" }',
      errors: [
        {
          message: `Wrong enum member case "testname". It should be UPPERCASE.`,
          type: 'TSEnumMember',
        },
      ],
    },
    {
      code: 'enum Test { TESTNAME = "test", second = "test2" }',
      errors: [
        {
          message: `Wrong enum member case "second". It should be UPPERCASE.`,
          type: 'TSEnumMember',
        },
      ],
    },
    {
      code: 'enum Test { TestName = "test2" }',
      errors: [
        {
          message: `Wrong enum member case "TestName". It should be UPPERCASE.`,
          type: 'TSEnumMember',
        },
      ],
    },
  ],
});
