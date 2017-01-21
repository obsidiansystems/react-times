const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test:   /\.css/,
        loaders: ['style', 'css'],
        // include: path.resolve(__dirname, '../css/')
      },
      {
        test: /\.svg$/,
        loader: 'babel!react-svg'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
