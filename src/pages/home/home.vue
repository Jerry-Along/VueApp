<template>
	<div>
		<h2>{{msg}}</h2>
		<router-link to="./list" class = "home">跳转到list页面</router-link>
	</div>
</template>

<script>
import homeHeader from './components/header.vue'
export default {
	name:"homePage",
	data(){
		return{
			msg:'Welcome to my vueApp'
		}
	}
}
</script>

<style scoped>
	h1{
		font-weight: normal;
	}
	.home{
		font-size: 20px;
	}
	
</style>
