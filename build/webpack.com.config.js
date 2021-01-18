const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  entry: './src/module/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'com1.js',
    library: 'MyLibrary.s111',
    libraryTarget: 'var',
  },
  mode: 'none',
  module: {
    // loader
    rules: [
      {
        test: /\.js$/, //匹配js文件
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: [
    {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    /^biu_\d{3,5}$/,
  ],
};
