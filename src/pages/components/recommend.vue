<template>
	<div>
		<div class="recommend-title">猜你喜欢</div>
		<ul>
			<li class="item border-bottom">
				<div class="item-img-box">
					<img class="item-img" src="http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9facf35be.jpg"/>
				</div>
				<div class="item-info">
					<p class="item-title">北京欢乐谷</p>
					<p class="item-comment-num">★★★★★ 4036条评论</p>
					<div class="item-money-position">
						<p class="item-money">123元</p>
						<p class="item-position">朝阳区</p>
					</div>
					<p class="item-desc">亚洲唯一飞行式过山车等你来挑战</p>
				</div>
			</li>
			<li class="item border-bottom">
				<div class="item-img-box">
					<img class="item-img" src="https://cs.vmovier.com/Uploads/Series/2018-11-15/5becc5ff55398.jpg"/>
				</div>
				<div class="item-info">
					<p class="item-title">北京欢乐谷</p>
					<p class="item-comment-num">★★★★★ 4036条评论</p>
					<div class="item-money-position">
						<p class="item-money">123元</p>
						<p class="item-position">朝阳区</p>
					</div>
					<p class="item-desc">亚洲唯一飞行式过山车等你来挑战</p>
				</div>
			</li>
			<li class="item border-bottom">
				<div class="item-img-box">
					<img class="item-img" src="http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9ecdb788a.jpg"/>
				</div>
				<div class="item-info">
					<p class="item-title">北京欢乐谷</p>
					<p class="item-comment-num">★★★★★ 4036条评论</p>
					<div class="item-money-position">
						<p class="item-money">123元</p>
						<p class="item-position">朝阳区</p>
					</div>
					<p class="item-desc">亚洲唯一飞行式过山车等你来挑战</p>
				</div>
			</li>
		
		</ul>
	</div>
</template>

<script>
export default{
	name:'homeRecommend'
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
