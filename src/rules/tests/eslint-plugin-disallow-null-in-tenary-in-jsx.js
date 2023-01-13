/**
 * @fileoverview Disallow keycodes without constants
 * @author Jarosław Salwa
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/eslint-plugin-disallow-null-in-tenary-in-jsx'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('eslint-plugin-disallow-null-in-tenary-in-jsx', rule, {
  valid: [
    '<Text>{isDisabled && <View />}</Text>',
    'a = true ? null : 2',
    '<Text isDisabled={variable ? null : 1} />'
  ],

  invalid: [
    {
      code: '<Text>{isDisabled ? null : <View />}</Text>',
      errors: [
        {
          message:
            'Unnecessary null used in tenary expression. Use {variable && something} instead of {variable ? null : something}',
          type: 'JSXExpressionContainer'
        }
      ]
    },
    {
      code: '<Text>{isDisabled ? null : null}</Text>',
      errors: [
        {
          message:
            'Unnecessary null used in tenary expression. Use {variable && something} instead of {variable ? null : something}',
          type: 'JSXExpressionContainer'
        }
      ]
    },
    {
      code: '<Text>{isDisabled ? <View /> : null}</Text>',
      errors: [
        {
          message:
            'Unnecessary null used in tenary expression. Use {variable && something} instead of {variable ? null : something}',
          type: 'JSXExpressionContainer'
        }
      ]
    }
  ]
});
