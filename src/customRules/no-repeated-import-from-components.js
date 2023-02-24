/**
 * @fileoverview components in "components" import should have index.ts to not have duplicated import paths
 * @author Jarosław Salwa
 */
'use strict';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description:
        'components in "components" import should have index.ts to not have duplicated import paths',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: []
  },

  create: function(context) {
    const duplicatedPathRegex = /components\/\b(\w+)\/\1\b/;
    return {
      ImportDeclaration(node) {
        if (context.getFilename().includes('.test.')) {
          return undefined;
        }
        const importText = node.source.value || '';
        const pathSplit = importText.split('/');
        if (pathSplit.length <= 2 || pathSplit[0] !== 'components') {
          return undefined;
        }
        const duplicatedPath = importText.match(duplicatedPathRegex);

        if (!duplicatedPath) {
          return undefined;
        }

        const componentFileName = duplicatedPath[1];
        context.report({
          node: node,
          message: `Component "${componentFileName}" should have index.ts file to have import like "components/${componentFileName}"`
        });
      }
    };
  }
};
