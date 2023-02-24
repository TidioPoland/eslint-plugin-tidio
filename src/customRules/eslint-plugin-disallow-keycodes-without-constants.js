/**
 * @fileoverview Disallow keycodes without constants
 * @author Jarosław Salwa
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow keycodes without constants",
            category: "Stylistic Issues",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            BinaryExpression(node) {
                if (context.getFilename().includes(".test.")) {
                    return undefined;
                }
                if (
                    node.left.type === "MemberExpression" &&
                    node.left.object.type === "Identifier" &&
                    node.left.property.type === "Identifier" &&
                    (node.left.property.name === "which" ||
                        node.left.property.name === "keyCode")
                ) {
                    if (node.right.type === "Identifier") {
                        const constantNameRegExp = RegExp(/[A-Z0-9_\-]/, "g");
                        if (!constantNameRegExp.test(node.right.name)) {
                            context.report({
                                node: node,
                                message:
                                    "Unexpected key code usage without a constant variable written in uppercase ({{ e }})",
                                data: {
                                    e: node.right.name
                                }
                            });
                        }
                    } else if (node.right.type === "Literal") {
                        context.report({
                            node: node,
                            message:
                                "Unexpected key code usage without a constant variable ({{ e }})",
                            data: {
                                e: node.right.value
                            }
                        });
                    }
                }
            }
        };
    }
};
