var webpack = require('webpack');

var AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
var AotPlugin = require('@ngtools/webpack').AotPlugin;

var path = require('path');

module.exports = {
  entry: {
    "sampleapp": "./src/main.ts",
  },

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, "_bundles"),
    publicPath: '_bundles/',
    filename: "[name].js",
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  plugins: [
    new AngularCompilerPlugin({
      "tsConfigPath": 'tsconfig.json',
      "entryModule": 'angularModule#SampleAppModuleAngular',
      "sourceMap": true,
      "skipCodeGeneration": true,
    }),
   // new AotPlugin({ tsConfigPath: 'tsconfig.json', mainPath: 'app/main.ts' }),
  ],

  module: {
    rules: [
      { test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,  use: [ "@ngtools/webpack" ] },
    ]
  },

  externals: {
    angular: 'angular',
  }
};
