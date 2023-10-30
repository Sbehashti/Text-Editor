const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

// Workbox plugins
const {InjectManifest} = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

// CSS loaders
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

// Babel
const {LoaderOptionsPlugin} = require('webpack');

module.exports = () => {

  // Workbox service worker
  plugins: [
    new InjectManifest({
      swSrc: './src-sw.js',
      swDest: 'src-sw.js',
    })
  ],

  // Manifest config  
  plugins: [
    new WebpackPwaManifest({
      name: 'JATE Editor',
      short_name: 'JATE',
      description: 'Text editor for the web!',
      background_color: '#225ca3',
      theme_color: '#225ca3',
      start_url: '/',
      publicPath: '/',
      icons: [
        {
          src: path.resolve('src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
        }
      ]
    })
  ],

  // CSS loaders
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },

  // Babel loader
  plugins: [
    new LoaderOptionsPlugin({
      options: {
        presets: ['@babel/preset-env'],
      }
    })
  ]

}

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};