<template>
	<div>
		<swiper :options="swiperOption" class="wapper-content">
			<!-- slides -->
			<swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-class" :src="item.imgUrl"></swiper-slide>
			<!-- Optional cont ols -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		name: 'homeSwiper',
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop: true,
					speed:4000,
					autoplay:{
						delay:2000
					}
						
				},
				swiperList: [{
					id: '0001',
					imgUrl: "https://cs.vmovier.com/Uploads/cover/2019-06-11/5cff76bb59c78_cut.jpeg"
				}, {
					id: '0002',
					imgUrl: "https://cs.vmovier.com/Uploads/cover/2019-06-14/5d03416adc1e5_cut.jpeg"
				}, {
					id: '0003',
					imgUrl: "https://cs.vmovier.com/Uploads/cover/2019-06-14/5d036a616aa47_cut.jpeg"
				}, {
					id: '0004',
					imgUrl: "https://cs.vmovier.com/Uploads/cover/2019-06-14/5d031a7f2038c_cut.jpeg"
				}]
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wapper-content >>> .swiper-pagination-bullet-active 
		background:#fff 
	.wapper-content 
		overflow:hidden
		width:100% 
		height:0 
		padding-bottom:62.5% 
		background:#ccc 
		.swiper-class 
			width:100%
</style>
