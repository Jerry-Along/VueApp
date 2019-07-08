<template>
	<div class="banner">
		
		<div class="banner-img-box">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_600x330_b40971b4.jpg" />
		</div>
		
		<div class="banner-info-box">
			<div class="banner-info">
				<div class="banner-info-num">
					<span class="iconfont banner-info-num-ico">&#xe678;</span> 123
				</div>
				<p class="banner-info-name">八达岭长城(AAAAA景区)</p>
			</div>
		</div>
		
		
	</div>
</template>

<script>
export default{
	name:"detailBanner"
}
</script>

<style lang="stylus" scoped>
	.banner
		position:relative
		overflow:hidden
		.banner-img-box
			height:0
			width:100%
			padding-bottom:54%
			.banner-img
				width:100%
		.banner-info-box
			position:absolute
			left:0
			bottom:0
			right:0
			background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,50,0,0.8))
			.banner-info	
				color:#fff
				text-align:left
				margin:.9rem .8rem
				
				
				.banner-info-num
					margin-left:.5rem
					font-size:.7rem
					height:1.8rem
					line-height:1.8rem
					.banner-info-num-ico
						font-size:.7rem
				
				
		
</style>
