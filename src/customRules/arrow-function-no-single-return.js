/**
 * @fileoverview Disallow single return in arrow function
 * @author arrow-function-no-single-return
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Disallow single return in arrow function',
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
      ArrowFunctionExpression(node) {
        if (context.getFilename().includes('.test.')) {
          return undefined;
        }
        const block = node.body;
        if (block && block.type === 'BlockStatement') {
          if (
            block.body &&
            Array.isArray(block.body) &&
            block.body.length === 1 &&
            block.body[0].type === 'ReturnStatement'
          ) {
            context.report({
              node: node,
              message: 'Unexpected single return in arrow function body'
            });
          }
        }
      }
    };
  }
};
