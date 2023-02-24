/**
 * @fileoverview Require grouping tidio imports
 * @author tidio-globals-should-be-grouped
 */
'use strict';
const helpers = require('./helpers');
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Require grouping tidio imports',
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
    const foundModule = context.options[0] || { "modules": helpers.defaultTidioModules };
    const modules = foundModule.modules;
    const checkIfImportIsSeparatedWithItsFamily = (
      allAbsoluteImportNodes,
      i,
      j,
      alreadyReported,
      level,
      nameToCompare
    ) => {
      if (
        alreadyReported.indexOf(allAbsoluteImportNodes[j].source.value) !== -1
      ) {
        return false;
      }
      for (let k = allAbsoluteImportNodes.length - 1; k >= j; k -= 1) {
        const errorName = allAbsoluteImportNodes[k].source.value.split('/');
        if (errorName[level] === nameToCompare[level]) {
          alreadyReported.push(
            allAbsoluteImportNodes[i].source.value,
            allAbsoluteImportNodes[j].source.value,
            allAbsoluteImportNodes[k].source.value
          );
          context.report({
            node: allAbsoluteImportNodes[j],
            message: `'${
              allAbsoluteImportNodes[j].source.value
            }' import should occur after '${
              allAbsoluteImportNodes[k].source.value
            }'`
          });
          break;
        }
      }
      return true;
    };

    return {
      Program(node) {
        if (context.getFilename().includes('.test.')) {
          return undefined;
        }
        const allAbsoluteImportNodes = node.body.filter(element => {
          if (element.type !== 'ImportDeclaration') {
            return false;
          }
          return helpers.isNodeTidioModule(modules, element.source.value);
        });
        const alreadyReported = [];
        for (let i = 0; i < allAbsoluteImportNodes.length; i += 1) {
          // do not report the same file twice because it will be probably useless anyway
          if (
            alreadyReported.indexOf(allAbsoluteImportNodes[i].source.value) !==
            -1
          ) {
            continue;
          }
          const name = allAbsoluteImportNodes[i].source.value.split('/');
          for (let j = i + 1; j < allAbsoluteImportNodes.length; j += 1) {
            const currentName = allAbsoluteImportNodes[j].source.value.split(
              '/'
            );
            // 1 lvl ('store')
            if (name[0] !== currentName[0]) {
              checkIfImportIsSeparatedWithItsFamily(
                allAbsoluteImportNodes,
                i,
                j,
                alreadyReported,
                0,
                name
              );
            }
            // 2nd level (store/visitors or store/visitors/actions)
            else if (name[1] && name[1] !== currentName[1]) {
              checkIfImportIsSeparatedWithItsFamily(
                allAbsoluteImportNodes,
                i,
                j,
                alreadyReported,
                1,
                name
              );
            }
          }
        }
      }
    };
  }
};
