<template>
	<div>
		<div class="recommend-title">猜你喜欢</div>
		<ul>
			<router-link
				to="/detail"
				tag="li"
				class="item border-bottom" 
				v-for="item in recommendList" 
				:key="item.bannerid">
					<div class="item-img-box">
						<img class="item-img" :src="item.image"/>
					</div>
					<div class="item-info">
						<p class="item-title">北京欢乐谷</p>
						<p class="item-comment-num">★★★★★ {{item.bannerid}}条评论</p>
						<div class="item-money-position">
							<p class="item-money">123元</p>
							<p class="item-position">朝阳区</p>
						</div>
						<p class="item-desc">亚洲唯一飞行式过山车等你来挑战</p>
					</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default{
	name:'homeRecommend',
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
		
	.item
		overflow:hidden
		height:6rem
		font-size:.9rem
		display:flex 
		.item-img-box
			float:left
			width:6rem
			height:6rem
			padding:.2rem
			.item-img
				width:100%
				height:5.6rem
		.item-info
			flex:1
			text-align:left
			padding:.3rem
			.item-title
				line-height:1.5rem
			.item-comment-num
				line-height:1rem
				color:#616161
				font-size:.7rem
			.item-money-position
				height:1.5rem
				.item-money
					line-height:1.5rem
					float:left
					color:#ff8300
				.item-position
					float:right
					font-size:.7rem
			.item-desc
				line-height:1rem
				color:#ff5555
				font-size:.6rem
				background:pink
				text-align:center
				margin-right:3rem
				border-radius:0.5rem
				
			
</style>
