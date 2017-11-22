import Router from 'vue-router'
import Vue from 'vue'
import home from '../vuePages/home.vue'
import order from '../vuePages/order.vue'
import me from '../vuePages/me.vue'
Vue.use(Router)
const router = new Router({
	mode:'history',
	routes:[
	{
		path:'/home',
		component:(resolve)=> require(['../vuePages/home.vue'],resolve)
	},
	{
		path:'/order',
		component: (resolve)=>require(['../vuePages/order.vue'],resolve)
	},
	{
		path:'/me',
		component: (resolve)=>require(['../vuePages/me.vue'],resolve)
	}
	]
})
export default router