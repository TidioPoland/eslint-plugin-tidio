/**
 * @fileoverview Require enum members to be UPPERCASE
 * @author enum-declaration-pascal-case
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Require enum members to be UPPERCASE',
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
      TSEnumMember(node) {
        const enumName = node.id.name;
        if (!/^[A-Z0-9_]*$/.test(enumName)) {
          context.report({
            node: node,
            message: `Wrong enum member case "${enumName}". It should be UPPERCASE.`
          });
        }
      }
    };
  }
};
