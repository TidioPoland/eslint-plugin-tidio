/**
 * @fileoverview Disallow keycodes without constants
 * @author Jarosław Salwa
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Disallow tenary with null',
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
      JSXExpressionContainer(node) {
        if (context.getFilename().includes('.test.')) {
          return undefined;
        }
        if (
          !node.expression ||
          (node.expression && node.expression.type !== 'ConditionalExpression')
        ) {
          return undefined;
        }
        if (!node.parent || (node.parent && node.parent.type !== 'JSXElement')) {
            return undefined;
        }
        const leftSide = node.expression.consequent;
        const rightSide = node.expression.alternate;
        if (
          (leftSide &&
            leftSide.type === 'Literal' &&
            leftSide.value === null) ||
          (rightSide &&
            rightSide.type === 'Literal' &&
            rightSide.value === null)
        ) {
          context.report({
            node,
            message:
              'Unnecessary null used in tenary expression. Use {variable && something} instead of {variable ? null : something}',
          });
        }
      }
    };
  }
};
