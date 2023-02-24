'use strict';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Function should return data with <const>',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: []
  },

  create: function(context) {
    return {
      ReturnStatement(node) {
        const filename = context.getFilename();
        const regex = new RegExp(/actions(ts){0,1}\.ts$/i);
        if (filename.includes('.test.') || !regex.test(filename)) {
          return undefined;
        }
        if (
          !node.parent ||
          !node.parent.body ||
          node.parent.body.length === 0
        ) {
          context.report({
            node: node,
            message:
              'Return in TS action creator should use <const> before returned object'
          });
        }
        const returnNode = node.parent.body.find(
          valueNode => valueNode.type === 'ReturnStatement'
        );
        if (
          !returnNode ||
          !returnNode.argument ||
          returnNode.argument.type !== 'TSTypeAssertion' ||
          returnNode.argument.typeAnnotation.type !== 'TSTypeReference' ||
          !returnNode.argument.typeAnnotation.typeName ||
          returnNode.argument.typeAnnotation.typeName.name !== 'const'
        ) {
          context.report({
            node: node,
            message:
              'Return in TS action creator should use <const> before returned object'
          });
        }
        return undefined;
      }
    };
  }
};
