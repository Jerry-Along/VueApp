<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
	</div>
</template>

<script>
import homeHeader from './../components/header'
import homeSwiper from './../components/swiper'

export default {
	name:"homePage",
	components:{
		homeHeader,homeSwiper
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
