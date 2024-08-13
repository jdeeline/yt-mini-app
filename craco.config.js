// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        baseUrl: '.',
        alias: {
          '@': './src',
          '@app': './src/app',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@pages': './src/pages',
          '@utils': './src/utils',
        },
      },
    },
  ],
};
