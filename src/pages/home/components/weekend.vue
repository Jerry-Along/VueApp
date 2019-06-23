<template>
	<div>
		<div class="recommend-title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommendList" :key="item.bannerid">
				<div class="item-img-box">
					<img class="item-img" :src="item.image"/>
				</div>
				<div class="item-info">
					<p class="item-title">北京欢乐谷</p>
					<p class="item-desc">亚洲唯一飞行式过山车等你来挑战</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:'homeWeekend',
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
		

	.item-img-box
		overflow:hidden
		width:100%
		height:0
		padding-bottom:55%
		.item-img
			width:100%
			
	.item-info
		text-align:left
		padding:.3rem
		.item-title
			font-size:.9rem
			line-height:1.5rem
		.item-desc
			text-align:left
			line-height:1rem
			color:#616161
			font-size:.6rem
			
			
			
</style>
