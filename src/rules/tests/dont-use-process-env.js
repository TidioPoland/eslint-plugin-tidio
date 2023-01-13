/**
 * @fileoverview Do not use process.env in code
 * @author dont-use-process-env
 */
'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/dont-use-process-env'),
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
ruleTester.run('dont-use-process-env', rule, {
  valid: ["console.log(getEnv('TEST'));"],

  invalid: [
    {
      code: `console.log(process.env.TEST);`,
      errors: [
        {
          message: "Do not use process.env.TEST. Use getEnv('TEST') instead.",
          type: 'MemberExpression'
        }
      ]
    }
  ]
});
