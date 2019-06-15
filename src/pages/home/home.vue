<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
	</div>
</template>

<script>
import homeHeader from './../components/header'
import homeSwiper from './../components/swiper'
import homeIcons from './../components/icons'

export default {
	name:"homePage",
	components:{
		homeHeader,homeSwiper,homeIcons
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
