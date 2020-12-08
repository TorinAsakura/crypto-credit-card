const path = require('path')

module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
    }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    ['elementum-tools/lib/babel/plugin', {
      alias: {
        'C3': path.join(__dirname, 'src'),
        'C3UI': path.join(__dirname, '../ui/src'),
      },
    }],
  ],
  ignore: [
    /node_modules\/(?!ui)/,
  ]
}
