/**
 * @fileoverview Components import should have an absolute import
 * @author components-should-have-absolute-import
 */
'use strict';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Components import should have an absolute import',
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
          pathSplit[1] === 'components'
        ) {
          return undefined;
        }
        if (pathSplit[0] === 'components') {
          return undefined;
        }

        const hasSharedImport = pathSplit.find((element, index) => {
          return element === 'shared' && pathSplit[index + 1] === 'components';
        });
        if (!hasSharedImport) {
          return undefined;
        }

        if (hasSharedImport) {
          context.report({
            node: node,
            message: 'components module import should be absolute'
          });
        }
      }
    };
  }
};
