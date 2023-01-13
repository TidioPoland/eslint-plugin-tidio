/**
 * @fileoverview Disallow tidio packages before or mixed with other packages
 * @author tidio-globals-after-other-packages
 */
'use strict';
const helpers = require('./helpers');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description:
        'Disallow tidio packages before or mixed with other packages',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      {
        modules: {
          type: 'array',
          required: true
        }
      }
    ]
  },

  create: function(context) {
    const foundModule = context.options[0] || {
      modules: helpers.defaultTidioModules
    };
    const modules = foundModule.modules;
    return {
      Program(node) {
        if (context.getFilename().includes('.test.')) {
          return undefined;
        }
        const allAbsoluteImportNodes = node.body.filter(element => {
          if (element.type !== 'ImportDeclaration') {
            return false;
          }
          return !element.source.value.startsWith('.');
        });
        for (let i = 0; i < allAbsoluteImportNodes.length; i += 1) {
          if (
            !helpers.isNodeTidioModule(
              modules,
              allAbsoluteImportNodes[i].source.value
            )
          ) {
            continue;
          }
          for (let j = allAbsoluteImportNodes.length - 1; j >= i; j -= 1) {
            if (
              !helpers.isNodeTidioModule(
                modules,
                allAbsoluteImportNodes[j].source.value
              )
            ) {
              context.report({
                node: allAbsoluteImportNodes[i],
                message: `'${
                  allAbsoluteImportNodes[i].source.value
                }' import should occur after '${
                  allAbsoluteImportNodes[j].source.value
                }'`
              });
              break;
            }
          }
        }
      }
    };
  }
};
