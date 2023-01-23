/**
 * @type {import('@storybook/react-webpack5').StorybookConfig}
 */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-storysource',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    {
      name: 'storybook-addon-turbo-build',
      options: {
        optimizationLevel: 2,
      },
    },
  ],
  features: {
    interactionsDebugger: true,
    storyStoreV7: true,
    buildStoriesJson: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true,
      strictMode: true,
      builder: {
        fsCache: true,
      },
    },
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
}
