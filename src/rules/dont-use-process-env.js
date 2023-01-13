/**
 * @fileoverview Do not use process.env in code
 * @author dont-use-process-env
 */
'use strict';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'process.env.XXX should not be used',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: []
  },

  create: function(context) {
    return {
      MemberExpression(node) {
        if (
          context.getFilename().includes('.test.') ||
          context.getFilename().includes('webpack')
        ) {
          return undefined;
        }
        if (
          node.object &&
          node.object.name === 'process' &&
          node.property &&
          node.property.name === 'env' &&
          node.parent &&
          node.parent.property &&
          typeof node.parent.property.name === 'string'
        ) {
          const envName = node.parent.property.name;
          context.report({
            node: node,
            message: `Do not use process.env.${envName}. Use getEnv('${envName}') instead.`
          });
        }
      }
    };
  }
};
