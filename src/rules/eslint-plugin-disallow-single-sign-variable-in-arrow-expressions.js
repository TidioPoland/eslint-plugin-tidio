/**
 * @fileoverview Disallow single sign variable in arrow expressions
 * @author Jarosław Salwa
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Disallow single sign variable in arrow expressions',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null,
    schema: []
  },

  create: function(context) {
    return {
      ArrowFunctionExpression(node) {
        if (context.getFilename().includes('.test.')) {
          return undefined;
        }
        node.params.forEach(param => {
          if (param.type === 'Identifier' && param.name.length === 1) {
            context.report({
              node: node,
              message:
                'Unexpected non-descriptive parameter received in arrow function expression - "{{ e }}"',
              data: { e: param.name.trim() }
            });
          }
        });
      }
    };
  }
};
