<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
	</div>
</template>

<script>
import homeHeader from './../components/header'
import homeSwiper from './../components/swiper'
import homeIcons from './../components/icons'
import homeRecommend from './../components/recommend'

export default {
	name:"homePage",
	components:{
		homeHeader,homeSwiper,homeIcons,homeRecommend
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
