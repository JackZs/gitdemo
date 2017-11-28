<template>
	<div id="app">
		<h1 class="title">vueDemo</h1>
		 <ul class="nav-bar">
			<router-link to='home'><li>首页</li></router-link>
			<router-link to='order'><li>分类</li></router-link>
			<router-link to='me'><li>我的</li></router-link>
			<router-link to='selectCar'><li>购物车</li></router-link>
		 </ul>
	     <router-view></router-view>
	</div>

</template>
<script >
export default {

}
</script>
<style lang="less">
.title{
	font-size: 20px;
	color: #333;
}
 .nav-bar{
 	display: flex;
 	a{
 		display: block;
 		width: 25%;
 		height: 35px;
 	}
 

 }

</style>