const path = require("path");
const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../src/**/*.stories.@(tsx)", "../examples/**/*.stories.@(tsx)"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: config => {
    return {
      ...config,
      // https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react")
        }
      }
    };
  }
};
