const path = require('path')
module.exports = {
	entry:path.join(__dirname,'src/index.js'),
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	module:{
		  rules:[
		  {
		  	test:/\.js$/,
		  	use:['babel-loader?cacheDirectory=true'],
		  	include:path.join(__dirname, 'src')
		  },
		  {
		  	test:/\.vue$/,
		  	loader:'vue-loader'
		  }
		  ]
		
	},
	devServer:{
		contentBase: path.join(__dirname, './dist'),
		compress: true,
		port:3000,
		historyApiFallback: true,
		proxy: {
      "/api": "http://localhost:3000"
	  },
	}
}