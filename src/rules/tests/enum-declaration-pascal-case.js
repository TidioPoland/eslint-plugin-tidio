/**
 * @fileoverview Require enum declarations identifiers to be PascalCase
 * @author enum-declaration-pascal-case
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/enum-declaration-pascal-case'),
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
ruleTester.run('enum-declaration-pascal-case', rule, {
  valid: [
    'enum Test {}',
    'enum ThisIsTest {}',
    'enum Test1 {}',
    'enum ThisIs2Test {}',
    'enum ThisIsTestNumber2 {}',
  ],

  invalid: [
    {
      code: 'enum test {}',
      errors: [
        {
          message: `Wrong enum declaration identifier "test". It should be PascalCase.`,
          type: 'TSEnumDeclaration',
        },
      ],
    },
    {
      code: 'enum TEST {}',
      errors: [
        {
          message: `Wrong enum declaration identifier "TEST". It should be PascalCase.`,
          type: 'TSEnumDeclaration',
        },
      ],
    },
    {
      code: 'enum thisIsTest {}',
      errors: [
        {
          message: `Wrong enum declaration identifier "thisIsTest". It should be PascalCase.`,
          type: 'TSEnumDeclaration',
        },
      ],
    },
  ],
});
