/**
 * @fileoverview Import media files after js files and less files
 * @author Jarosław Salwas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/imports-order-for-media-files"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("imports-order-for-media-files", rule, {
    valid: [
        "import moment from 'moment'; import 'react'; import './test.png';",
        "import moment from 'moment'; import { test } from './test';import './test.jpg';",
        "import moment from 'moment'; import { test } from './test'; import './test.jpg';import './test2.png';",
        "import moment from 'moment'; import 'react'; import './test.less'; import testImage from './image.png';",
    ],

    invalid: [
        {
            code:
                "import 'moment'; import lodash from 'lodash'; import './image.jpg';import 'react';",
            errors: [
                {
                    message:
                        'Media files should be imported after js files, libraries and less files - "./image.jpg"',
                    type: 'ImportDeclaration'
                }
            ]
        },
        {
            code:
                "import moment from 'moment';import './image.png';import './test';",
            errors: [
                {
                    message:
                        'Media files should be imported after js files, libraries and less files - "./image.png"',
                    type: 'ImportDeclaration'
                }
            ]
        },
        {
            code:
                "import moment from 'moment';import './image.png';import '../../test';",
            errors: [
                {
                    message:
                        'Media files should be imported after js files, libraries and less files - "./image.png"',
                    type: 'ImportDeclaration'
                }
            ]
        },
        {
            code:
                "import moment from 'moment';import './image.png';import '../../../test';",
            errors: [
                {
                    message:
                        'Media files should be imported after js files, libraries and less files - "./image.png"',
                    type: 'ImportDeclaration'
                }
            ]
        },
        {
            code:
                "import moment from 'moment';import './image.jpeg';import {test} from './test';",
            errors: [
                {
                    message:
                        'Media files should be imported after js files, libraries and less files - "./image.jpeg"',
                    type: 'ImportDeclaration'
                }
            ]
        },
        {
            code:
                "import moment from 'moment';import './test.mp4';import './test.less';import {test} from './test';",
            errors: [
                {
                    message:
                        'Media files should be imported after js files, libraries and less files - "./test.mp4"',
                    type: 'ImportDeclaration'
                }
            ]
        },
        {
            code:
                "import moment from 'moment';import {test} from './test';import './test.png';import './test.less';",
            errors: [
                {
                    message:
                        'Media files should be imported after js files, libraries and less files - "./test.png"',
                    type: 'ImportDeclaration'
                }
            ]
        }
    ]
});
