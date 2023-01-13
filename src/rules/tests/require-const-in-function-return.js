'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/require-const-in-action-creator-ts-function'),
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
ruleTester.run('require-const-in-action-creator-ts-function', rule, {
  valid: [
    {
      code: `export function fetchRegularCampaigns() {return <const>{type: "SOME-TYPE-ZIOM"};}`,
      filename: 'actions.ts',
    },
    {
      code: `export function fetchRegularCampaigns() {return <const>{type: "SOME-TYPE"};}`,
      filename: 'actionsTS.ts',
    },
    {
      code: `export function fetchRegularCampaigns() {return {type: "SOME-TYPE"};}`,
      filename: 'actions.js',
    },
    {
      code: `export function fetchRegularCampaigns() {return {type: "SOME-TYPE"};}`,
      filename: 'some/path/with/actions/file.js',
    },
    {
      code: `export function saveNotifications(
        hasNotificationSoundChanged: boolean,
    ) {
        const emptyFunc = (): void => {};
        return <const>{
            type: OPERATORS_SAVE_NOTIFICATIONS,
            hasNotificationSoundChanged,
        };
    }`,
      filename: 'actions.ts',
    },
  ],

  invalid: [
    {
      code: 'export function fetchRegularCampaigns() {return {type: "SOME-TEST-TYPE"};}',
      filename: 'actionsTS.ts',
      errors: [
        {
          message:
            'Return in TS action creator should use <const> before returned object',
          type: 'ReturnStatement',
        },
      ],
    },
  ],
});
