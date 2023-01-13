/**
 * @fileoverview Disallow single return in arrow function
 * @author arrow-function-no-single-return
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/arrow-function-no-single-return"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    }
});
var ruleTester = new RuleTester();
ruleTester.run('arrow-function-no-single-return', rule, {
  valid: [
    "variable.map(iterator => iterator);",
    "variable.map(iterator => { const tmp = iterator * 88; return tmp; });"
  ],

  invalid: [
    {
      code: 'variable.map(iterator => { return iterator; });',
      errors: [
        {
          message: 'Unexpected single return in arrow function body',
          type: 'ArrowFunctionExpression'
        }
      ]
    }
  ]
});
