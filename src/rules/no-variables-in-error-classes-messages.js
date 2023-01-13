/**
 * @fileoverview Disallow using variables in error exceptions messages
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: 'Disallow using variables in error class message constructor.',
            category: 'Stylistic Issues',
            recommended: false
        },
        fixable: null, // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            NewExpression(node) {
                if (context.getFilename().includes('.test.')) {
                    return undefined;
                }

                let isStringLiteral = false;
                const isErrorDeclaration = node.callee.name && node.callee.name.includes('Error');

                if(isErrorDeclaration) {
                    if (node.arguments.length === 0) {
                        return undefined;
                    }

                    isStringLiteral = node.arguments && node.arguments.length >= 1 && node.arguments[0].type === 'Literal';

                    if (!isStringLiteral) {
                        context.report({
                            node: node,
                            message: 'Variables shouldn\'t be used in error message.'
                        });
                    }
                }
            }
        };
    }
};
