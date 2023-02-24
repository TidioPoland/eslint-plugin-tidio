/**
 * @fileoverview Prevent using return;
 * @author Grzegorz Dominiczak
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent using return;',
      category: 'Best Practices',
      recommended: true
    },
    fixable: null,
    schema: []
  },

  create: function(context) {
    return {
      ReturnStatement: function(node) {
        if (node.argument === null) {
          context.report(
            node,
            'Prefer using explicit return instead of return;'
          );
        }
      }
    };
  }
};
