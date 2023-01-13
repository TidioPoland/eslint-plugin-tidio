/**
 * @fileoverview Track import should have an absolute import
 * @author track-should-have-absolute-import
 */
'use strict';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Track import should have an absolute import',
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
          pathSplit[1] === 'track'
        ) {
          return undefined;
        }
        const lastElement = pathSplit[pathSplit.length - 1];
        const nearlyLastElement = pathSplit[pathSplit.length - 2];
        if (
          pathSplit.length > 1 &&
          (nearlyLastElement === '..' || nearlyLastElement === 'models') &&
          lastElement === 'track'
        ) {
          context.report({
            node: node,
            message: 'track module import should be absolute'
          });
        }
      }
    };
  }
};
