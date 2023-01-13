/**
 * @fileoverview Track import should have an absolute import
 * @author track-should-have-absolute-import
 */
'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/track-should-have-absolute-import'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
});
var ruleTester = new RuleTester();
ruleTester.run('track-should-have-absolute-import', rule, {
  valid: [
    "import track from 'track'",
    "import track from './track'",
    "import { doesTracklationExist } from 'track';",
    "import track, { doesTracklationExist } from 'track';",
    "import nothingReally from '../modals/tracking';",
    "import nothingReally from '../trackHelper';"
  ],

  invalid: [
    {
      code: `import track from '../track';`,
      errors: [
        {
          message: 'track module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import track, { doesTracklationExist } from '../track';`,
      errors: [
        {
          message: 'track module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import { doesTracklationExist } from '../track';`,
      errors: [
        {
          message: 'track module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import track from '../../../../track';`,
      errors: [
        {
          message: 'track module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import track from '../../../../models/track';`,
      errors: [
        {
          message: 'track module import should be absolute',
          type: 'ImportDeclaration'
        }
      ]
    }
  ]
});
