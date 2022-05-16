"use strict";

const basic = require("./src/basic");
const react = require("./src/react");
const translations = require("./src/translations");
const jest = require("./src/jest");
const emotion = require("./src/emotion");
const storybook = require("./src/storybook");
const redux = require("./src/redux");
const testingLibrary = require("./src/testingLibrary");

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

module.exports = {
  configs,
};
