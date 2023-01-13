/**
 * @fileoverview Disallow keycodes without constants
 * @author Jarosław Salwa
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/eslint-plugin-disallow-keycodes-without-constants"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("eslint-plugin-disallow-keycodes-without-constants", rule, {

    valid: [
        "e.which === CONSTANT",
        "e.keyCode === CONSTANT",
        "e.keyCode === CONST_ANT",
        "e.keyCode === CONSTANT3",
        "e.b.keyCode === CONSTANT",
        "e.b.keyCode === 13"
    ],

    invalid: [
        {
            code: "abc.which === 13",
            errors: [
                {
                    message: "Unexpected key code usage without a constant variable (13)",
                    type: "BinaryExpression"
                }
            ]
        },
        {
            code: "abc.keyCode === 90",
            errors: [
                {
                    message: "Unexpected key code usage without a constant variable (90)",
                    type: "BinaryExpression"
                }
            ]
        },
        {
            code: "abc.keyCode === lowercasename",
            errors: [
                {
                    message:
                        "Unexpected key code usage without a constant variable written in uppercase (lowercasename)",
                    type: "BinaryExpression"
                }
            ]
        },
        {
            code: "e.which === 13",
            errors: [
                {
                    message: "Unexpected key code usage without a constant variable (13)",
                    type: "BinaryExpression"
                }
            ]
        }
    ]
});
