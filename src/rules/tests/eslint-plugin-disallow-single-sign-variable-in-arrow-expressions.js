/**
 * @fileoverview Disallow single sign variable in arrow expressions
 * @author Jarosław Salwa
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/eslint-plugin-disallow-single-sign-variable-in-arrow-expressions"),

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
ruleTester.run("eslint-plugin-disallow-single-sign-variable-in-arrow-expressions", rule, {

    valid: [
        "test.map(item => true)",
        "test.map((testItem, testIterator) => true)"
    ],

    invalid: [
        {
            code: "test.map(a => true)",
            errors: [{
                message: 'Unexpected non-descriptive parameter received in arrow function expression - "a"',
                type: "ArrowFunctionExpression"
            }]
        },
        {
            code: "test.map((testItem, i) => true)",
            errors: [{
                message: 'Unexpected non-descriptive parameter received in arrow function expression - "i"',
                type: "ArrowFunctionExpression"
            }]
        }
    ]
});
