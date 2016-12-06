var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
   devServer: {
      inline: true,
      port: 7878
   },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        //exclude: dont run webpack on these files
        include : APP_DIR, // just run webpack on these files
        loader : 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};

module.exports = config;
