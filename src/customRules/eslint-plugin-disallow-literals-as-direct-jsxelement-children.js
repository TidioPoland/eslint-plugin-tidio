/**
 * @fileoverview Disallow string literals as direct JSXElement children
 * @author Grzegorz Dominiczak
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Disallow string literals as direct JSXElement children',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    var allowedStrings = ['&times;', '&nbsp;', '&raquo;', '&hellip;'];
    return {
      JSXElement(node) {
        if (context.getFilename().includes('.test.')) {
          return undefined;
        }
        const directLiterals = node.children.filter(c => c.type === 'JSXText' || c.type === 'Literal');
        if (directLiterals.length > 0) {
          directLiterals.forEach(literal => {
            const trimmed = literal.value.replace(/\W|\d/g, '');
            const trimmedWhiteSpace = literal.value.trim();
            if (
              trimmed.length > 1 &&
              allowedStrings.indexOf(trimmedWhiteSpace) === -1 &&
              trimmedWhiteSpace.indexOf('http') === -1
            ) {
              context.report({
                node: literal,
                message:
                  'Unexpected literal used as direct child of JSXElement - {{ e }}',
                data: { e: literal.value.trim() }
              });
            }
          });
        }
      }
    };
  }
};
