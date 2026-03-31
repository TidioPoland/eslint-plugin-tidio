# @tidio/eslint-plugin-tidio

[![npm version](https://badge.fury.io/js/@tidio%2Feslint-plugin-tidio.svg)](https://badge.fury.io/js/@tidio%2Feslint-plugin-tidio)

This package provides custom ESLint configs for different uses.

> **v7.0.0** requires ESLint 9+ and uses the [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) format. For legacy `.eslintrc` support, use v6.x.

## Installation

```
yarn add -D @tidio/eslint-plugin-tidio eslint
```

## Usage

Create an `eslint.config.js` (or `eslint.config.mjs`) at the root of your project:

```js
import tidio from "@tidio/eslint-plugin-tidio";

export default [
  ...tidio.configs.react,
  ...tidio.configs.translations,
  ...tidio.configs.jest,
  // Other configs...
];
```

All plugin dependencies are bundled — no additional ESLint plugins need to be installed separately. The `@rushstack/eslint-patch` workaround from v6.x is no longer needed.

## Available configs

### basic

```js
...tidio.configs.basic
```

Extends [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) and TypeScript ESLint recommended rules. Includes import, prettier, and eslint-comments plugins along with custom Tidio rules. Suitable for any kind of repo (Node.js, non-React repos, etc).

**This config is interchangeable with `react` — do not use both at the same time.**

### react

```js
...tidio.configs.react
```

A superset of `basic` with additional React-only rules. Extends [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) (instead of airbnb-base) and includes React Hooks rules with React Compiler support and JSX-a11y plugins. Suitable for repos that use React.

**This config is interchangeable with `basic` — do not use both at the same time.**

### emotion

```js
...tidio.configs.emotion
```

Rules for the CSS-in-JS Emotion package.

### translations

```js
...tidio.configs.translations
```

Disallows using strings as direct JSX children and requires always importing from `lang` as `trans`.

### jest

```js
...tidio.configs.jest
```

Jest recommended and style rules.

### redux

```js
...tidio.configs.redux
```

Custom Redux rules for action files.

### storybook

```js
...tidio.configs.storybook
```

Overrides for Storybook `stories` files.

### testingLibrary

```js
...tidio.configs.testingLibrary
```

Testing Library rules scoped to test files.

## Migration from v6.x

v7.0.0 is a breaking change. Key differences:

1. **Flat config only** — replace your `.eslintrc.js` with `eslint.config.js` (or `.mjs`/`.cjs`)
2. **No `@rushstack/eslint-patch`** — flat config resolves plugins natively; remove this dependency
3. **Spread syntax** — configs are now arrays; use `...tidio.configs.react` instead of `extends: ["plugin:@tidio/eslint-plugin-tidio/react"]`
4. **No parser config needed** — TypeScript parser is configured automatically
