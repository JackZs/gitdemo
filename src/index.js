import React,{Component} from 'react'
import ReactDom from 'react-dom'
import reactRouter from './router/reactRouter.js'
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux'
import vueRouter from './router/vueRouter.js'
import Vue from 'vue'
import app from './app.vue'
import store from './redux/store.js'
import './asset/global.css'
// react
// 初始化
renderWithHotReload(reactRouter())
if(module.hot){
	module.hot.accept('./router/reactRouter',()=>{
		const getRouter = require('./router/reactRouter').default
		renderWithHotReload(getRouter)
	})
}

function renderWithHotReload(rootElement) {
	ReactDom.render(<AppContainer><Provider store={store}>{rootElement}</Provider></AppContainer>,document.getElementById("app"))
}
// vue
// new Vue({
// 	el:'#app',
// 	router:vueRouter,
// 	render:(createElement)=>createElement(app)
// })


