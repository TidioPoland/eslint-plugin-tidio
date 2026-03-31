import basic from "./src/basic.js";
import react from "./src/react.js";
import translations from "./src/translations.js";
import jest from "./src/jest.js";
import emotion from "./src/emotion.js";
import storybook from "./src/storybook.js";
import redux from "./src/redux.js";
import testingLibrary from "./src/testingLibrary.js";

const plugin = {
  configs: {
    basic,
    react,
    translations,
    jest,
    emotion,
    storybook,
    redux,
    testingLibrary,
  },
};

export default plugin;
