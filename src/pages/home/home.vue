<template>
	<div>
		<img src="./../../assets/logo1.jpg" />
		<h2>{{msg}}</h2> <br />
		<home-header></home-header>
		<!-- <router-link to="./list" class = "home">跳转到第二页</router-link> -->
	</div>
</template>

<script>
import homeHeader from './../components/header'
export default {
	name:"homePage",
	components:{
		homeHeader
	},
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
