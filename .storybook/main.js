const babelConfig = require("../babel.config");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  babel: async (options) => {
    options.overrides.push({
      ...babelConfig,
      test: "*", // This says "for all files, use this override".
    });

    return options;
  },
};
