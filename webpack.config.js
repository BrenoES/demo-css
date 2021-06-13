 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resourceUsage } = require('process');

 module.exports = {
   target:'web',
  mode: 'development',
   entry: {
     index: './src/index.ts'
   },
   plugins: [
     new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, 'src/index.html')
     }),
   ],
   module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host:'0.0.0.0',
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hot:true,
    writeToDisk:true,
    watchContentBase:true
  },
};