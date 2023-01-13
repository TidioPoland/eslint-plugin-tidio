/**
 * @fileoverview Disallow tidio packages before or mixed with other packages
 * @author tidio-globals-after-other-packages
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/tidio-globals-after-other-packages'),
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
ruleTester.run('tidio-globals-after-other-packages', rule, {
  valid: [
    `import React from 'react';
    import store from 'store';
    import design from 'design';
    import utils from 'utils';
    import apiData from 'apiData';
    import swal from 'swal';
    import helpers from 'helpers';
    import track from 'track';
    import lang from 'lang';
    import chatData from 'chatData';
    import botsSectionHelpers from 'botsSectionHelpers';
    import upgradeHelpers from 'upgradeHelpers';
    import test from './file';
    import utilsTest from './utils-file';`,
    `import React from 'react';
    import design from 'design';
    import chatData from 'chatData';
    import utils from 'utils';
    import apiData from 'apiData';
    import swal from 'swal';
    import helpers from 'helpers';
    import store from 'store';
    import track from 'track';
    import store2 from 'store/actions';
    import lang from 'lang';
    import botsSectionHelpers from 'botsSectionHelpers';
    import upgradeHelpers from 'upgradeHelpers';
    import test from './file';
    import utilsTest from './utils-file';`
  ],

  invalid: [
    {
      code: `import React from 'react';
      import store from 'store';
      import immutable from 'immutable';`,
      errors: [
        {
          message: "'store' import should occur after 'immutable'",
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import React from 'react';
      import store from 'store';
      import immutable from 'immutable';
      import test from 'jest';`,
      errors: [
        {
          message: "'store' import should occur after 'jest'",
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import React from 'react';
      import store from 'store';
      import utils from 'utils';
      import immutable from 'immutable';
      import test from 'jest';`,
      errors: [
        {
          message: "'store' import should occur after 'jest'",
          type: 'ImportDeclaration'
        },
        {
          message: "'utils' import should occur after 'jest'",
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code: `import React from 'react';
      import store from 'store';
      import utils from 'utils';
      import immutable from 'immutable';
      import test from 'jest';`,
      options: [
        {
          modules: ['utils']
        }
      ],
      errors: [
        {
          message: "'utils' import should occur after 'jest'",
          type: 'ImportDeclaration'
        }
      ]
    }
  ]
});
