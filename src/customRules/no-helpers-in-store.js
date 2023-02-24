/**
 * @fileoverview store directory shouldn't use global browser variables
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
         "store directory shouldn't use shared helpers",
       category: 'Stylistic Issues',
       recommended: false,
     },
     fixable: null, // or "code" or "whitespace"
     schema: [],
   },
 
   create: function (context) {
     return {
        ImportDeclaration(node) {
            const fileName = context.getFilename();
            if (fileName.includes('.test.')) {
              return undefined;
            }
            const isStore = fileName.includes('/store/');
            if (isStore) {
              const importText = node.source.value || '';
              const pathSplit = importText.split('/');
              if (pathSplit[0] !== 'helpers') {
                return undefined;
              }
    
              context.report({
                node: node,
                message: `Nothing from 'helpers/...' should be imported in 'store'`
              });
            }
          }
     };
   },
 };
 