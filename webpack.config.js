var webpack = require('webpack');
var path=require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_PATH = path.resolve(__dirname,'src');
var BUILD_PATH = path.resolve(__dirname,'build');

module.exports = {
	entry:APP_PATH,
	output:{
		path:BUILD_PATH,
		filename:'bundle.js'
	},
	resolve:{
		extensions:['','.js','.jsx']
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:['style','css'],
				include:[APP_PATH]
			},
			{
				test:/\jsx?$/,
				loaders:['babel'],
				include:[APP_PATH]
			},
      {
        test:/(\.eot$)|(\.ttf)|(\.woff2?)|(\.svg)/,
        loader:'url-loader',
        include:[APP_PATH]
      }
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title:'Redux Friends List'
		}),
    new webpack.NoErrorsPlugin()
	],
	devtool:'eval-source-map',
	devServer:{
		hot:true,
		inline:true,
		progress:true,
	  noInfo:true,
    historyApiFallback:true
  }
};
