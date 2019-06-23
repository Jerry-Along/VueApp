<template>
	<div class="header border-bottom">
		城市选择
		<router-link to="/home">
			<div class="cityBack">
				<span class="iconfont">&#xe678;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default{
	name:"cicyHeader"
}
</script>

<style lang="stylus" scoped>
	
	@import '~wenze/values.styl'
	.header
		position:relative
		height:2.2rem
		line-height:2.2rem
		background:$bgColor
		color:#fff
		font-size:.9rem
		overflow:hidden
		.cityBack
			top:0
			left:0
			position:absolute
			width:3rem
			float:left
			color:#fff
			
			
</style>
