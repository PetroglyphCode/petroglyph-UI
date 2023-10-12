const path = require('path')
const { compile } = require('@vue/compiler-sfc');

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
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [path.join(__dirname, 'src')],
    },
	    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]'
        }
         
       },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "/css/",
         
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      // Options
                    },
                  ],
                ],
              }
              
            }
          }
        ]
      },
       {
         test: /\.(png|svg|jpg|gif)$/,
         type: 'asset/resource',
         generator: {
          filename: 'img/[name].[ext]'
        }
       }
     ],
  },
  plugins: [
    new HtmlWebpackPlugin({
	    filename: 'index.html',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename:"css/[name].css",
    }),
  ],
  output: {
	  filename:'[name].js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    
    static: path.join(__dirname,  '../deploy/public/assets/webpack') // Get it to serve from somewhere other than right here.
  }
}
