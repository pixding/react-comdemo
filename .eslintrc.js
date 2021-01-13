module.exports = {
  parser: '@typescript-eslint/parser', // 解析器 espree, @typescript-eslint/parser, babel-eslint
  env: {
    node: false, // 定义了预定义的环境变量
  },
  extends: [
    // eslint: xxx | xxx -> eslint-config-xxx    plugin: xxx  eslint-plugin-xxx
    'plugin:react/recommended', // 扩展react
    'plugin:@typescript-eslint/eslint-recommended', // 扩展ts 内置了 eslint-recommended
    'plugin:prettier/recommended', // 需要额外安装 eslint-config-prettier  因为eslint-plugin-config对该包添加了peerDependenciesMeta options:true
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: { react: { version: 'detect' } },
};
