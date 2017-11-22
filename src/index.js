import React,{Component} from 'react'
import ReactDom from 'react-dom'
import reactRouter from './router/reactRouter.js'
import vueRouter from './router/vueRouter.js'
import Vue from 'vue'
import app from './app.vue'


// react
ReactDom.render(reactRouter(),document.getElementById("app"))


// vue
// new Vue({
// 	el:'#app',
// 	router:vueRouter,
// 	render:(createElement)=>createElement(app)
// })


