/**
 * @fileoverview store and utils directories shouldn't use global browser variables
 * @author Daniel Domański
 */
'use strict';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description:
        "store and utils directories shouldn't use global browser variables",
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [],
  },

  create: function (context) {
    return {
      Identifier: function (node) {
        const fileName = context.getFilename();
        if (fileName.includes('.test.')) {
          return undefined;
        }
        const isUtils = fileName.includes('/utils/');
        const isStore = fileName.includes('/store/');
        if (isUtils || isStore) {
          const regexes = [
            /^(session|local)Storage$/,
            /^navigator$/,
            /^window/,
            /^document/,
          ];

          regexes.forEach((regex) => {
            if (regex.test(node.name)) {
              context.report(node, 'Unexpected use of {{name}}.', {
                name: node.name,
              });
            }
          });
        }
      },
    };
  },
};
