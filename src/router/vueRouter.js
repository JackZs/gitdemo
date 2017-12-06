import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
const router = new Router({
	mode:'history',
	routes:[
	{
		path:'/home',
		component:(resolve)=> require(['vuePages/home.vue'],resolve)
	},
	{
		path:'/order',
		component: (resolve)=>require(['vuePages/order.vue'],resolve)
	},
	{
		path:'/me',
		component: (resolve)=>require(['vuePages/me.vue'],resolve)
	},
	{
		path:'/selectCar',
		component:(resolve)=>require(['vuePages/selectCar.vue'],resolve)
	}
	]
})
export default router