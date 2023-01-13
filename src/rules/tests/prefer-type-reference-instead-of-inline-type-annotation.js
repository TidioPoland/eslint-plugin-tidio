'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/prefer-type-reference-instead-of-inline-type-annotation'),
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
ruleTester.run(
  'prefer-type-reference-instead-of-inline-type-annotation',
  rule,
  {
    valid: [
      {
        code: `
        function Foo({ foo, bar, baz }: { foo: string; bar: string; baz: string }) {}
        `,
        filename: 'component.tsx',
      },
      {
        code: `
        const Foo = () => {}
        `,
        filename: 'component.tsx',
      },
      {
        code: `
        type FooProps = {
          foo: string,
          bar: string,
          baz: string,
          fizz: string
        };
        function Foo({
          foo,
          bar,
          baz,
          fizz
        }: FooProps) {}
        `,
        filename: 'component.tsx',
      },
      {
        code: `
        type FooProps = {
          foo: string,
          bar: string,
          baz: string,
          fizz: string
        };
        const Foo = ({
          foo,
          bar,
          baz,
          fizz
        }): FooProps => {};
        `,
        filename: 'component.tsx',
      },
    ],

    invalid: [
      {
        code: `
        function Foo({
          foo,
          bar,
          baz,
          fizz
        }: {
          foo: string,
          bar: string,
          baz: string,
          fizz: string
        }) {}
        `,
        filename: 'component.tsx',
        errors: [
          {
            message: `Prefer type reference instead of inline type annotation when number of parameters is greater than 3.`,
            type: 'FunctionDeclaration',
          },
        ],
      },
      {
        code: `
        const Foo = ({
          foo,
          bar,
          baz,
          fizz
        }: {
          foo: string,
          bar: string,
          baz: string,
          fizz: string
        }) => {};
        `,
        filename: 'component.tsx',
        errors: [
          {
            message: `Prefer type reference instead of inline type annotation when number of parameters is greater than 3.`,
            type: 'ArrowFunctionExpression',
          },
        ],
      },
    ],
  }
);
