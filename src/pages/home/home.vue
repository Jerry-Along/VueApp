<template>
	<div>
		<home-header></home-header>
		<home-swiper :cityBanner="cityBanner"></home-swiper>
		<home-icons></home-icons>
		<home-hot-week></home-hot-week>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
import homeHeader from './components/header'
import homeSwiper from './components/swiper'
import homeIcons from './components/icons'
import homeHotWeek from './components/hotWeek'
import homeRecommend from './components/recommend'
import homeWeekend from './components/weekend'

export default {
	name:"homePage",
	components:{
		homeHeader,homeSwiper,homeIcons,homeHotWeek,homeRecommend,homeWeekend
	},
	data(){
		return {
			cityBanner:[]
		}
	},
	mounted(){
		this.axios.get("/api/home.json").then((res) => {
			const resdata=res.data;
			this.cityBanner = resdata.data.banner.list;
			
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
