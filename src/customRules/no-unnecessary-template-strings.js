/**
 * @fileoverview Disallow using string templates for simple strings
 * @author enum-members-should-be-uppercase
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Disallow using string templates for simple strings',
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
      TemplateLiteral(node) {
        if (context.getFilename().includes('.test.')) {
          return undefined;
        }
        if (node.expressions.length > 0) {
          return true;
        }
        let isValidStringTemplate = false;
        node.quasis.forEach(element => {
          isValidStringTemplate = element.value.raw.indexOf('\n') > -1;
        });
        if (!isValidStringTemplate) {
          context.report({
            node: node,
            message: 'Simple string should not be in string template'
          });
        }
      }
    };
  }
};
