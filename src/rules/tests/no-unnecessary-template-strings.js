/**
 * @fileoverview Disallow using string templates for simple strings
 * @author no-unnecessary-template-strings
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-unnecessary-template-strings'),
  RuleTester = require('eslint').RuleTester;


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
ruleTester.run('no-unnecessary-template-strings', rule, {
  valid: ['`hey${variable}`', '`hey\ntest`', '`${variable}`'],

  invalid: [
    {
      code: '`justastring`',
      errors: [
        {
          message: 'Simple string should not be in string template',
          type: 'TemplateLiteral'
        }
      ]
    }
  ]
});
