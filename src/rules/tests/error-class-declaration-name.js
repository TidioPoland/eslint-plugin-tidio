/**
 * @fileoverview Disallow using string templates for simple strings
 * @author no-unnecessary-template-strings
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/error-class-declaration-name'),
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
ruleTester.run('error-class-declaration-name', rule, {
    valid: [`class TestError extends Error {}`],
    invalid: [
        {
            code:  `class Test extends Error {}`,
            errors: [
                {
                    message: 'Class that extends Error should have "Error" in class name.',
                    type: 'ClassDeclaration'
                }
            ]
        },
    ]
});
