import path from 'path'
import webpack from 'webpack'
import jssGlobal from 'jss-global'
import jssNested from 'jss-nested'
import jssCamelCase from 'jss-camel-case'
import autoprefixer from 'autoprefixer'
import AssetsPlugin from 'assets-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin'

export const mode = 'production'

export const entry = {
  desktop: [
    '@babel/polyfill',
    './src/client/desktop.js',
  ],
  mobile: [
    '@babel/polyfill',
    './src/client/mobile.js',
  ],
}

export const output = {
  path: path.join(__dirname, '../../dist'),
  filename: '[name].[hash].js',
  publicPath: '/',
}

export const module = {
  rules: [
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          query: {
            babelrc: false,
            presets: [
              ['@babel/preset-env', {
                targets: {
                  ie: 8,
                },
                shippedProposals: true,
                modules: false,
              }],
              '@babel/preset-react',
            ],
            plugins: [
              'react-hot-loader/babel',
              '@babel/plugin-proposal-class-properties',
              ['elementum-tools/lib/babel/plugin', {
                alias: {
                  C3: 'src',
                  C3UI: path.join(__dirname, '../../../ui/src'),
                },
                extract: true,
              }],
            ],
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>2%',
                    'last 2 versions',
                  ],
                }),
              ],
            },
          },
        ],
      }),
    },
    {
      test: /\.jss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>2%',
                    'last 2 versions',
                  ],
                }),
              ],
            },
          },
          'jss-loader',
        ],
      }),
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]',
    },
  ],
}

export const resolve = {
  plugins: [
    new CssResolvePlugin(),
  ],
}

export const plugins = [
  new ExtractTextPlugin('[name].[hash].css'),
  new AssetsPlugin({
    path: path.join(__dirname, '../../dist'),
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      jssLoader: {
        plugins: [
          jssGlobal(),
          jssNested(),
          jssCamelCase(),
        ],
      },
    },
  }),
  new webpack.ProvidePlugin({
    fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
  }),
  new CopyWebpackPlugin([{
    from: path.join(__dirname, '..', '..', 'assets'),
  }]),
]