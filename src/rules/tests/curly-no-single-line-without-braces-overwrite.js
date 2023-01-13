/**
 * @fileoverview Disallow if body without braces
 * @author Jarosław Salwa
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/curly-no-single-line-without-braces-overwrite"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("curly-no-single-line-without-braces-overwrite", rule, {

    valid: [
        "if (a === 3) { console.log('test'); }",
    ],

    invalid: [
        {
            code: "if (a === 3) console.log('test');",
            errors: [{
                message: "Missing braces after if statement, got ExpressionStatement",
                type: "IfStatement"
            }]
        }
    ]
});
