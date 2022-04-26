# @tidio/eslint-plugin-tidio

[![npm version](https://badge.fury.io/js/@tidio%2Feslint-plugin-tidio.svg)](https://badge.fury.io/js/@tidio%2Feslint-plugin-tidio)

This package provides custom eslint configs for different uses.

## Installation

To install run

```
yarn add -D @tidio/eslint-plugin-tidio @rushstack/eslint-patch
```

## Usage

To add tidio plugin to your eslint config you should be adding individual configs (with `plugin:@tidio/eslint-plugin-tidio/`) prefix to `extends` array in your eslint rc file. One important thing to note is that you should add `require("@rushstack/eslint-patch/modern-module-resolution");` to the top of your `.eslintrc.js` file. This package patches eslint to use its own module resolution. What it does in practice - you do not need to install any other packages than this one in your repository (normally you would need to install airbnb, eslint plugins etc). For more detailed info see [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch)

Example config can look like this:

```
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@tidio/eslint-plugin-tidio/react',
        'plugin:@tidio/eslint-plugin-tidio/translations',
    ]
};
```

# Available configs

## basic

To add it to your config add `plugin:@tidio/eslint-plugin-tidio/basic` to `extends` array.

This config extends [airbnb-base](https://www.npmjs.com/package/eslint-plugin-tidio-airbnb-base) config. It also extends prettier and recommended rules for typescript. Additionally there are rules which override some of airbnb rules and some that add new rules to this set. This config should be usable in any kind of repo (node, non-react repos etc).

**This config is interchangeable with `react` config and those 2 should never be used at the same time**

## react

To add it to your config add `plugin:@tidio/eslint-plugin-tidio/react` to `extends` array.

This config is an extension of `basic` ruleset with some additional react-only rules. This config extends [airbnb](https://www.npmjs.com/package/eslint-plugin-tidio-airbnb) config instead of `airbnb-base`. In addition to `basic` and `airbnb` ruleset there are some additional react rules overrides, react-hooks rules and some other custom rules. This config should be usable in repos which use `react`

**This config is interchangeable with `basic` config and those 2 should never be used at the same time**

## emotion

To add it to your config add `plugin:@tidio/eslint-plugin-tidio/emotion` to `extends` array.

It contains rules for CSS-in-JS emotion package.

## translations

To add it to your config add `plugin:@tidio/eslint-plugin-tidio/translations` to `extends` array.

This ruleset disallows using strings as direct JSX children and it requires always importing from `lang` as `trans`.

## jest

To add it to your config add `plugin:@tidio/eslint-plugin-tidio/jest` to `extends` array and update your `settings` object in eslint rc file with `jest->version`, for example:

```
settings: {
    jest: {
        version: 26,
    },
},
```

This config adds jest rules to your ruleset. It extends `jest/recommended` and `jest/style` configs.

## redux

To add it to your config add `plugin:@tidio/eslint-plugin-tidio/redux` to `extends` array.

It adds custom redux rules.

## storybook

To add it to your config add `plugin:@tidio/eslint-plugin-tidio/storybook` to `extends` array.

It adds some overrides for `stories` files.
