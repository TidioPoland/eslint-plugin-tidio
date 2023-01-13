/**
 * @fileoverview Disallow if body without braces
 * @author Jarosław Salwa
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow if body without braces",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        return {
            IfStatement(node) {
                if (context.getFilename().includes(".test.")) {
                    return undefined;
                }
                if (node.consequent.type !== 'BlockStatement') {
                    context.report({
                        node,
                        message:
                          'Missing braces after if statement, got {{e}}',
                        data: { e: node.consequent.type }
                      });
                }
            }

    }
}
};
