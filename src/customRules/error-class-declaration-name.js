/**
 * @fileoverview Ensure that class that extends Error has "Error" in class name
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: 'Force adding "Error" to class that extends Error class.',
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
            ClassDeclaration(node) {
                if (context.getFilename().includes('.test.')) {
                    return undefined;
                }

                const isSubclassOfError = node.superClass && node.superClass.name === 'Error'
                let hasCorrectName = false;

                if(isSubclassOfError) {
                    hasCorrectName = node.id.name.includes('Error');

                    if (!hasCorrectName) {
                        context.report({
                            node: node,
                            message: 'Class that extends Error should have "Error" in class name.'
                        });
                    }
                }
            }
        };
    }
};
