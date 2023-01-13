/**
 * @fileoverview Prefer function declaration instead of variable declaration when defining action creator
 * @author Prefer function declaration instead of variable declaration when defining action creator
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/prefer-function-declaration-in-actions'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
RuleTester.setDefaultConfig({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});
var ruleTester = new RuleTester();
ruleTester.run('prefer-function-declaration-in-actions', rule, {
  valid: [
    {
      code: `export const SOME_ACTION_TYPE_CONST = 'SOME_ACTION_TYPE_CONST'`,
      filename: 'actions.js',
    },
    {
      code: `export function someActionCreatorInTS() {
        return <const>{
            type: SOME_ACTION_TYPE_CONST,
        };
        }`,
      filename: 'actions.ts',
    },
    {
      code: `export function someActionCreator() {
        return {
            type: SOME_ACTION_TYPE_CONST,
        };
        }`,
      filename: 'actions.js',
    },
    {
      code: `export const someRandomExport = () => {}`,
      filename: 'some/path/with/actions/file.js',
    },
  ],

  invalid: [
    {
      code: `export const someActionCreator = () => {
        return {
            type: SOME_ACTION_TYPE_CONST,
        };
        }`,
      filename: 'actions.js',
      errors: [
        {
          message: `Prefer function declaration instead of variable declaration when defining action creator.`,
          type: 'ExportNamedDeclaration',
        },
      ],
    },
    {
      code: `export const someActionCreatorTS = () => {
        return {
            type: SOME_ACTION_TYPE_CONST,
        } as const;
        }`,
      filename: 'actions.ts',
      errors: [
        {
          message: `Prefer function declaration instead of variable declaration when defining action creator.`,
          type: 'ExportNamedDeclaration',
        },
      ],
    },
  ],
});
