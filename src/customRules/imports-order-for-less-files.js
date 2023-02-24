/**
 * @fileoverview Always put less files as last ones
 * @author Jarosław Salwa
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Always put less files as last ones',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    const isLessFile = name => {
      const lessNameRegexp = RegExp(/\.less$/, 'gi');
      return lessNameRegexp.test(name);
    };
    const hasNonJSExtension = name => {
      const nameWithoutPath = name
        .replace(/\.\.\//gi, '')
        .replace(/\.\//gi, '');
      const jSExtension = RegExp(/\.(js|jsx)$/, 'gi');
      if (jSExtension.test(nameWithoutPath)) {
        return false;
      }
      const startsWithDot = RegExp(/^\./);
      if (nameWithoutPath.indexOf('.') === -1) {
        return false;
      }
      const mediaExtension = RegExp(
        /\.(mp3|mp4|avi|webm|jpeg|jpg|png|bmp|gif|svg|mov)$/,
        'gi'
      );
      return mediaExtension.test(nameWithoutPath);
    };

    return {
      Program(nodes) {
        if (nodes.body) {
          const imports = nodes.body.filter(
            node => node.type === 'ImportDeclaration'
          );
          imports.forEach((singleImport, i) => {
            if (singleImport.source && singleImport.source.value) {
              if (isLessFile(singleImport.source.value)) {
                for (let j = i + 1; j < imports.length; j += 1) {
                  if (imports[j].source && imports[j].source.value) {
                    if (
                      !isLessFile(imports[j].source.value) &&
                      !hasNonJSExtension(imports[j].source.value)
                    ) {
                      context.report({
                        node: singleImport,
                        message:
                          'Less files should be imported after js files and libraries - "{{ e }}"',
                        data: { e: singleImport.source.value.trim() }
                      });
                      break;
                    }
                  }
                }
              }
            }
          });
        }
      }
    };
  }
};
