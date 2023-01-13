'use strict';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'There should always be a default export',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: []
  },

  create: function(context) {
    let hasDefaultExport = false;
    if (context.getFilename().includes('.test.')) {
      hasDefaultExport = true;
    }
    return {
      ExportDefaultDeclaration(node) {
        hasDefaultExport = true;
        return undefined;
      },
      'Program:exit': function(node) {
        if (!hasDefaultExport) {
          context.report(node, 'There should be a default export in this file')
        }
      }
    };
  }
};
