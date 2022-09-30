const path = require('path');

module.exports = {
  mode: 'development',
  // devtool: false,
  devtool: 'inline-cheap-source-map',
  entry: './src/index.js',
  output: {
    filename: 'mini-vue.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // 示例
  devServer: {
    contentBase: './src/examples',
    publicPath: '/dist',
    watchContentBase: true,
  },
  watchOptions: {
    poll: 5000,
    ignored: ['node_modules']
  }
};
