/**
 * @fileoverview Lang import should have an absolute import
 * @author lang-should-have-absolute-import
 */
'use strict';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Lang import should have an absolute import',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: []
  },

  create: function(context) {
    return {
      ImportDeclaration(node) {
        if (context.getFilename().includes('.test.')) {
          return undefined;
        }
        const importText = node.source.value || '';

        const pathSplit = importText.split('/');
        if (
          pathSplit.length === 2 &&
          pathSplit[0] === '.' &&
          pathSplit[1] === 'lang'
        ) {
          return undefined;
        }
        const lastElement = pathSplit[pathSplit.length - 1];
        const nearlyLastElement = pathSplit[pathSplit.length - 2];
        if (
          pathSplit.length > 1 &&
          nearlyLastElement === '..' &&
          lastElement === 'lang'
        ) {
          context.report({
            node: node,
            message: 'lang module import should be absolute'
          });
        }
      }
    };
  }
};
