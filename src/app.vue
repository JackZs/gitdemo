<template>
	<div id="app">
		<h1>vueDemo</h1>
	 <ul>
		<router-link to='home'><li>首页111</li></router-link>
		<router-link to='order'><li>2222222</li></router-link>
		<router-link to='me'><li>333</li></router-link>
		<router-link to='selectCar'><li>封装checkList组件112222</li></router-link>
	 </ul>
	 <router-view></router-view>
	</div>

</template>
<script >
export default {

}
</script>
<style>

</style>