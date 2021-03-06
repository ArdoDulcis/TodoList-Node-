module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
      main : './src/index.js',
  },

  output: {
      path: __dirname + '/public',
      filename: 'index.js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                }
            ]
        },
        {
            test: /\.(png|jpeg|jpg)$/,
            loader: 'file-loader'
        }
    ]
  }
};