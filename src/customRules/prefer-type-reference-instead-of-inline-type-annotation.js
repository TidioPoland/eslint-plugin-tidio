'use strict';

const { createImportSpecifier } = require('typescript');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const MAX_PROPERTY_LENGHT = 3;

module.exports = {
  meta: {
    docs: {
      description: 'Prefer type reference instead of inline type annotation.',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    function assert(node) {
      const { params } = node;
      for (const param of params) {
        const annotationType =
          param && param.typeAnnotation && param.typeAnnotation.typeAnnotation;
        if (!annotationType) {
          return undefined;
        }
        if (annotationType.type === 'TSTypeLiteral') {
          if (annotationType.members.length > MAX_PROPERTY_LENGHT) {
            context.report({
              node,
              message: `Prefer type reference instead of inline type annotation when number of parameters is greater than ${MAX_PROPERTY_LENGHT}.`
            });
          }
        }
      }
    }
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    const filename = context.getFilename();
    if (filename.includes('.test.')) {
      return {};
    }
    if (!filename.includes('.tsx')) {
      return {};
    }
    return {
      ArrowFunctionExpression(node, context) {
        assert(node);
      },
      FunctionDeclaration(node, context) {
        assert(node);
      }
    };
  }
};
