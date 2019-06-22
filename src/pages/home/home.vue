<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-hot-week></home-hot-week>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
import homeHeader from './../components/header'
import homeSwiper from './../components/swiper'
import homeIcons from './../components/icons'
import homeHotWeek from './../components/hotWeek'
import homeRecommend from './../components/recommend'
import homeWeekend from './../components/weekend'

export default {
	name:"homePage",
	components:{
		homeHeader,homeSwiper,homeIcons,homeHotWeek,homeRecommend,homeWeekend
	},
	mounted(){
		this.$axios.get("/api/data.json").then((res) => {
			console.log(res.data);
		}).catch( (res) =>{
			
		})
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
