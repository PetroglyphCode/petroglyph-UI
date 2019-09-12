const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
	  main: './src/index.js',
	  styles:'./src/assets/css/style.css'
	  
  },
  mode: process.env.NODE_ENV,
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  module: {
    rules: [
	    {
	        test: /\.vue$/,
	        use: 'vue-loader'
	      },
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', 
	            options: { 
		        importLoaders: 1,
                outputPath: 'assets/css/' 
                } 
              },
            'postcss-loader',
          ],
        }),
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
    new VueLoaderPlugin()
  ],
  output: {
	  filename:'[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
	  watchContentBase: true,
    contentBase: path.join(__dirname, 'docs') // Get it to serve from somewhere other than right here.
  }
}
