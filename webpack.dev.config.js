const path = require('path')
module.exports = {
	entry:['react-hot-loader/patch',path.join(__dirname,'src/index.js')],
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	resolve:{
       alias:{
       	reactPages:path.join(__dirname,'src/reactPages'),
       	vuePages:path.join(__dirname,'src/vuePages'),
       	vueComponent:path.join(__dirname,'src/vueComponent'),
       	reactComponent:path.join(__dirname,'src/reactComponent'),
       	router:path.join(__dirname,'src/router')
       }
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
		  },
		  { 
		  	test:/\.css$/,
		  	use:['style-loader','css-loader']
		  },
		  { 
		  	test:/\.less$/,
		  	use:['style-loader','css-loader','less-loader']
		  }
		  ]
		
	},
	devServer:{
		contentBase: path.join(__dirname, './dist'),
		// compress: true,
		port:3000,
		historyApiFallback: true,
		proxy: {
      "/api": "http://localhost:3000"
	  },
	}
}