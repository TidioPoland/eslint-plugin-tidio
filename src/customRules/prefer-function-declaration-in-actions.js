/**
 * @fileoverview Prefer function declaration instead of variable declaration when defining action creator
 * @author prefer-function-declaration-in-actions
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        'Prefer function declaration instead of variable declaration when defining action creator.',
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
      ExportNamedDeclaration(node) {
        const filename = context.getFilename();
        const regex = new RegExp(/actions(ts){0,1}\.(ts|js)$/i);
        if (filename.includes('.test.') || !regex.test(filename)) {
          return undefined;
        }
        const { declaration } = node;
        if (declaration.type === 'VariableDeclaration') {
          if (
            declaration.declarations &&
            declaration.declarations[0] &&
            declaration.declarations[0].init &&
            declaration.declarations[0].init.type === 'ArrowFunctionExpression'
          ) {
            context.report({
              node,
              message:
                'Prefer function declaration instead of variable declaration when defining action creator.'
            });
          }
        }
      }
    };
  }
};
