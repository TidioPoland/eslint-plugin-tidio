/**
 * @fileoverview Disallow relative imports from store
 * @author Daniel Domański
 */
'use strict';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: "it is forbidden to relatively import from store",
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: []
  },

  create: function(context) {
    return {
      ImportDeclaration(node) {
        const fileName = context.getFilename();
        if (fileName.includes('.test.')) {
          return undefined;
        }
        const importText = node.source.value || '';
        const pathSplit = importText.split('/');
        const hasRelativeStoreImport = pathSplit[0] !== 'store' && pathSplit.includes('store');

        if (!hasRelativeStoreImport) {
          return undefined;
        }

        context.report({
          node: node,
          message: 'Relative imports from store are not allowed. Use absolute import instead.'
        });
      }
    };
  }
};
