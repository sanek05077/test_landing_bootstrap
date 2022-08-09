import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export default {
  entry: {
    main: './src/js/app.js',
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(process.cwd(), './dist'),
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|jpeg|png|git|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
    }),

    new CopyPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images',
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'index.html'),
    }),
  ],

  devServer: {
    static: {
      directory: path.resolve(process.cwd(), 'dist'),
    },
    watchFiles: [
      path.resolve(process.cwd(), 'index.html'),
    ],
    compress: true,
    port: process.env.PORT || 8080,
    hot: true,
  },

  performance: {
    hints: false,
  },
};
