'use strict';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Import from lang module should always be trans',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: []
  },

  create: function(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'lang') {
          for (let i = 0; i < node.specifiers.length; i += 1) {
            if (
              node.specifiers[i].type === 'ImportDefaultSpecifier' &&
              node.specifiers[i].local.name !== 'trans'
            ) {
              console.log(node.specifiers[i]);
              context.report({
                node,
                message:
                  'Lang module should be imported as trans. Currently it is "{{ name }}"',
                data: { name: node.specifiers[i].local.name }
              });
            }
          }
        }
        return undefined;
      }
    };
  }
};
