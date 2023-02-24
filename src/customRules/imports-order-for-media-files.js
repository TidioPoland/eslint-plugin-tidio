/**
 * @fileoverview Import media files after js files and less files
 * @author Jarosław Salwas
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Import media files after js files and less files',
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
    const isMediaFile = name => {
      const mediaExtension = RegExp(
        /\.(mp3|mp4|avi|webm|jpeg|jpg|png|bmp|gif|svg|mov)$/,
        'gi'
      );
      return mediaExtension.test(name);
    };
    const isJSImport = name => {
      const nameWithoutPath = name
        .replace(/\.\.\//gi, '')
        .replace(/\.\//gi, '');
      const jSExtension = RegExp(/\.(js|jsx)$/, 'gi');
      if (jSExtension.test(nameWithoutPath)) {
        return true;
      }
      if (nameWithoutPath.indexOf('.') === -1) {
        return true;
      }
      return false;
    };

    return {
      Program(nodes) {
        if (nodes.body) {
          const imports = nodes.body.filter(
            node => node.type === 'ImportDeclaration'
          );
          imports.forEach((singleImport, i) => {
            if (singleImport.source && singleImport.source.value) {
              if (isMediaFile(singleImport.source.value)) {
                for (let j = i + 1; j < imports.length; j += 1) {
                  if (imports[j].source && imports[j].source.value) {
                    if (
                      !isMediaFile(imports[j].source.value) &&
                      (isLessFile(imports[j].source.value) ||
                        isJSImport(imports[j].source.value))
                    ) {
                      context.report({
                        node: singleImport,
                        message:
                          'Media files should be imported after js files, libraries and less files - "{{ e }}"',
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
