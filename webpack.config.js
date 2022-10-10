const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: {
	  main: './src/index.js',
	  styles:'./src/assets/css/style.css'

  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
	    {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use:[{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }]
       },
      {
        test: /\.css$/,
        use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: ['autoprefixer']
                        }
                    }
                }
            ]
      },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use:[{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/'
            }
          }]
       }
     ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      disable: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
	    filename: 'index.html',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename:"styles.css",
    }),
  ],
  output: {
	  filename:'[name].js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
	  watchContentBase: true,
    contentBase: path.join(__dirname, 'public') // Get it to serve from somewhere other than right here.
  }
}
