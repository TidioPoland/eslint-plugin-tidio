/**
 * @fileoverview Always put less files as last ones
 * @author Jarosław Salwa
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/imports-order-for-less-files'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('imports-order-for-less-files', rule, {
  valid: [
    "import moment from 'moment'; import 'react'; import './test.less';",
    "import moment from 'moment'; import { test } from './test';import './test.less';",
    "import moment from 'moment'; import { test } from './test'; import './test.less';import './test2.less';",
    "import moment from 'moment'; import 'react'; import './test.less'; import testImage from './image.png';",
  ],

  invalid: [
    {
      code:
        "import 'moment'; import lodash from 'lodash'; import './styles.less';import 'react';",
      errors: [
        {
          message:
            'Less files should be imported after js files and libraries - "./styles.less"',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code:
        "import moment from 'moment';import './styles.less';import './test';",
      errors: [
        {
          message:
            'Less files should be imported after js files and libraries - "./styles.less"',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code:
        "import moment from 'moment';import './styles.less';import {test} from './test';",
      errors: [
        {
          message:
            'Less files should be imported after js files and libraries - "./styles.less"',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code:
        "import moment from 'moment';import './styles.less';import './test.less';import {test} from './test';",
      errors: [
        {
          message:
            'Less files should be imported after js files and libraries - "./styles.less"',
          type: 'ImportDeclaration'
        },
        {
          message: 'Less files should be imported after js files and libraries - "./test.less"',
          type: 'ImportDeclaration'
        }
      ]
    },
    {
      code:
        "import moment from 'moment';import './styles.less';import {test} from './test';import './test.less';",
      errors: [
        {
          message:
            'Less files should be imported after js files and libraries - "./styles.less"',
          type: 'ImportDeclaration'
        }
      ]
      },
      {
          code:
              "import moment from 'moment';import './styles.less'; import test from '../../../../../test';",
          errors: [
              {
                  message:
                      'Less files should be imported after js files and libraries - "./styles.less"',
                  type: 'ImportDeclaration'
              }
          ]
      }
  ]
});
