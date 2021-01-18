const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'my-first-webpack.bundle.js',
    chunkLoadingGlobal: 'webpackJsonpClient',
  },
  mode: 'none',
  module: {
    // loader
    rules: [
      {
        test: /\.js$/, //匹配js文件
        include: [resolve('src')],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: [
    {
      react: {
        // UMD
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
      },
      'react-dom': 'ReactDOM',
      bbb: ['math', 'bbb'],
      subtract: {
        // subtract 可以通过全局 math 对象下的属性 subtract 访问（例如 window['math']['subtract']）
        root: ['math', 'subtract'],
      },
    },
    /^biu_\d{3,5}$/,
  ],
};
