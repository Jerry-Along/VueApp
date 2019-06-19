<template>
	<div>
		<div class="recommend-title">本周热门榜单</div>
		<ul class="week-class">
			<li class="item" v-for="item in recommendList" :key="item.bannerid">
				<div class="item-img-box">
					<img class="item-img" :src="item.image"/>
				</div>
				<div class="item-info">
					<p class="item-title">北京欢乐谷</p>
					<p class="item-money">123元</p>
				</div>
			</li>
		</ul>
		
	</div>
</template>

<script>
export default{
	name:'homeHotWeek',
	data(){
		return {
			recommendList: [{
				"showtype": "1",
				"bannerid": "3244",
				"image": "https:\/\/cs.vmovier.com\/Uploads\/Banner\/2019\/06\/19\/5d09dd5c6419a.jpg"
				
			}, {
				"showtype": "1",
				"bannerid": "3251",
				"image": "https:\/\/cs.vmovier.com\/Uploads\/Banner\/2019\/06\/19\/5d0a16df6b002.jpg"
			}, {
				"showtype": "1",
				"bannerid": "3213",
				"image": "https:\/\/cs.vmovier.com\/Uploads\/Banner\/2019\/06\/12\/5d007d73894e2.jpg"
			}, {
				"showtype": "1",
				"bannerid": "3247",
				"image": "https:\/\/cs.vmovier.com\/Uploads\/Banner\/2019\/06\/19\/5d09dd779bfaf.jpg"
			},{
				"showtype": "1",
				"bannerid": "3213",
				"image": "https:\/\/cs.vmovier.com\/Uploads\/Banner\/2019\/06\/12\/5d007d73894e2.jpg"
			}, {
				"showtype": "1",
				"bannerid": "3247",
				"image": "https:\/\/cs.vmovier.com\/Uploads\/Banner\/2019\/06\/19\/5d09dd779bfaf.jpg"
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
	.recommend-title
		line-height:2rem
		background:#eee
		text-align:left
		font-size:.9rem
		text-indent:.5rem
		
	ul::-webkit-scrollbar 
		display: none;
	
	.week-class
		overflow-x:scroll
		white-space:nowrap
		list-style: none
		.item
			display:inline-block
			.item-img-box
				width:6rem
				height:6rem
				padding:.2rem
				.item-img
					width:6rem
					height:6rem
			.item-info
				padding:0 1rem
				.item-title
					font-size:.7rem
				.item-money
					font-size:.8rem
					margin:.1rem auto
					color:#ff8300
				
		
				
			
</style>
