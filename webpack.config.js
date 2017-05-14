var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    "sampleapp": "./app/bootstrap/bootstrap.ts",

    "vendor": [
      'angular',
      'zone.js',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/upgrade',
      '@angular/router',
      '@uirouter/core',
      '@uirouter/angular-hybrid',
      '@uirouter/angularjs',
      '@uirouter/angular',
      '@uirouter/rx',
      '@uirouter/visualizer',
      'rxjs',
    ]
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: path.join(__dirname, "bundles"),
    publicPath: 'bundles/',
    filename: "[name].js",
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: true }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
  ],

  module: {
    loaders: [
      { test: /\.tsx?$/,  use: [ "source-map-loader" ], enforce: 'pre' },
      { test: /\.tsx?$/,  use: [ "awesome-typescript-loader?noEmit=true" ] },
    ]
  },
};
