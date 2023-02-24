"use strict";
var requireIndex = require("requireindex");

const basic = require("./src/configs/basic");
const react = require("./src/configs/react");
const translations = require("./src/configs/translations");
const jest = require("./src/configs/jest");
const emotion = require("./src/configs/emotion");
const storybook = require("./src/configs/storybook");
const redux = require("./src/configs/redux");
const testingLibrary = require("./src/configs/testingLibrary");

const configs = {
  basic,
  react,
  translations,
  jest,
  emotion,
  storybook,
  redux,
  testingLibrary,
};

const additionalRulesPlugin = require('eslint-plugin-rulesdir');
additionalRulesPlugin.RULES_DIR = __dirname + '/src/customRules';

module.exports = {
  plugins: ['rulesdir'],
  configs,
};
