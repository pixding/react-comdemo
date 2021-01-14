const pkg = require('./package.json');

module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
        corejs: 3,
      },
    ],
  ],
  presets: [
    [
      '@babel/env',
      {
        modules: 'commonjs',
        targets: { browsers: pkg.browserslist },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/typescript',
    '@babel/react',
  ],
};
