/**
 * @fileoverview Require enum declarations identifiers to be PascalCase
 * @author enum-declaration-pascal-case
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Require enum declarations identifiers to be PascalCase',
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
      TSEnumDeclaration(node) {
        const enumName = node.id.name;
        if (!/^[A-Z][a-z0-9]+(?:[A-Z][a-z0-9]+)*$/.test(enumName)) {
          context.report({
            node: node,
            message: `Wrong enum declaration identifier "${enumName}". It should be PascalCase.`
          });
        }
      }
    };
  }
};
